#!/bin/bash

# AWS Certification Platform - Setup Script
# Região: us-east-1 (para SSL e CloudFront)

echo "🚀 AWS Certification Platform - Setup Serverless"
echo "=================================================="

# Variáveis
BUCKET_NAME="aws-certification-platform-$(date +%s)"
REGION="us-east-1"

echo "📦 Criando S3 Bucket: $BUCKET_NAME"

# 1. Criar S3 Bucket
aws s3 mb s3://$BUCKET_NAME --region $REGION

# 2. Configurar Static Website Hosting
aws s3 website s3://$BUCKET_NAME --index-document index.html --error-document index.html

# 3. Configurar política pública do bucket
cat > bucket-policy.json << EOF
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "PublicReadGetObject",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::$BUCKET_NAME/*"
        }
    ]
}
EOF

aws s3api put-bucket-policy --bucket $BUCKET_NAME --policy file://bucket-policy.json

# 4. Criar CloudFront Distribution
echo "🌐 Criando CloudFront Distribution..."

cat > cloudfront-config.json << EOF
{
    "CallerReference": "aws-cert-platform-$(date +%s)",
    "Comment": "AWS Certification Platform CDN",
    "DefaultRootObject": "index.html",
    "Origins": {
        "Quantity": 1,
        "Items": [
            {
                "Id": "S3-$BUCKET_NAME",
                "DomainName": "$BUCKET_NAME.s3-website-$REGION.amazonaws.com",
                "CustomOriginConfig": {
                    "HTTPPort": 80,
                    "HTTPSPort": 443,
                    "OriginProtocolPolicy": "http-only"
                }
            }
        ]
    },
    "DefaultCacheBehavior": {
        "TargetOriginId": "S3-$BUCKET_NAME",
        "ViewerProtocolPolicy": "redirect-to-https",
        "TrustedSigners": {
            "Enabled": false,
            "Quantity": 0
        },
        "ForwardedValues": {
            "QueryString": false,
            "Cookies": {
                "Forward": "none"
            }
        },
        "MinTTL": 0,
        "DefaultTTL": 86400,
        "MaxTTL": 31536000
    },
    "Enabled": true,
    "PriceClass": "PriceClass_100"
}
EOF

DISTRIBUTION_ID=$(aws cloudfront create-distribution --distribution-config file://cloudfront-config.json --query 'Distribution.Id' --output text)

echo "✅ Setup Completo!"
echo "==================="
echo "📦 S3 Bucket: $BUCKET_NAME"
echo "🌐 CloudFront ID: $DISTRIBUTION_ID"
echo "🔗 Website URL: https://$BUCKET_NAME.s3-website-$REGION.amazonaws.com"
echo ""
echo "🔧 Próximos passos:"
echo "1. Adicionar secrets no GitHub:"
echo "   - AWS_ACCESS_KEY_ID"
echo "   - AWS_SECRET_ACCESS_KEY" 
echo "   - S3_BUCKET_NAME: $BUCKET_NAME"
echo "   - CLOUDFRONT_DISTRIBUTION_ID: $DISTRIBUTION_ID"
echo ""
echo "2. Aguardar CloudFront deployment (~15 min)"
echo "3. Fazer push para main branch para deploy automático"

# Cleanup
rm bucket-policy.json cloudfront-config.json