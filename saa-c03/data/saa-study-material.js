// SAA-C03 Material de Estudo

const saaStudyMaterial = {
    resilient: {
        title: "Resilient Architectures",
        weight: "30%",
        topics: [
            "Multi-AZ deployments",
            "Auto Scaling Groups", 
            "Load Balancers (ALB, NLB, CLB)",
            "Route 53 health checks",
            "Disaster Recovery strategies",
            "Backup and restore",
            "Cross-Region replication",
            "Fault tolerance design"
        ],
        keyServices: [
            "Elastic Load Balancing",
            "Auto Scaling",
            "Route 53",
            "AWS Backup",
            "S3 Cross-Region Replication",
            "RDS Multi-AZ",
            "ElastiCache",
            "CloudFormation"
        ]
    },
    performance: {
        title: "High-Performing Architectures", 
        weight: "28%",
        topics: [
            "CloudFront CDN",
            "ElastiCache caching strategies",
            "RDS read replicas",
            "EBS volume types and IOPS",
            "Instance types optimization",
            "Auto Scaling policies",
            "Database performance tuning",
            "Network optimization"
        ],
        keyServices: [
            "CloudFront",
            "ElastiCache", 
            "RDS",
            "EBS",
            "EC2 instance types",
            "Auto Scaling",
            "Lambda",
            "API Gateway"
        ]
    },
    secure: {
        title: "Secure Applications",
        weight: "24%", 
        topics: [
            "IAM roles and policies",
            "Security Groups and NACLs",
            "AWS WAF",
            "GuardDuty threat detection",
            "Secrets Manager",
            "KMS encryption",
            "Certificate Manager",
            "VPC security"
        ],
        keyServices: [
            "IAM",
            "AWS WAF",
            "GuardDuty",
            "Secrets Manager",
            "KMS",
            "Certificate Manager",
            "Security Groups",
            "Inspector"
        ]
    },
    cost: {
        title: "Cost-Optimized Architectures",
        weight: "18%",
        topics: [
            "Reserved Instances",
            "Spot Instances", 
            "Savings Plans",
            "S3 storage classes",
            "Lifecycle policies",
            "Cost monitoring",
            "Resource tagging",
            "Right-sizing"
        ],
        keyServices: [
            "Cost Explorer",
            "AWS Budgets",
            "Trusted Advisor",
            "S3 Intelligent Tiering",
            "Reserved Instances",
            "Spot Instances",
            "Savings Plans",
            "Cost Anomaly Detection"
        ]
    }
};

window.saaStudyMaterial = saaStudyMaterial;