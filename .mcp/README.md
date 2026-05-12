# MCP - Guia de Uso para Geração de Conteúdo

## Servidores MCP Configurados

### 1. filesystem
Acesso direto aos arquivos do projeto para leitura e escrita.
- Ler questões existentes
- Escrever novos bancos de questões
- Atualizar materiais de estudo

### 2. fetch
Buscar conteúdo da web para referência.

**URLs úteis por certificação:**

#### DOP-C02 (DevOps Engineer)
- https://aws.amazon.com/codepipeline/faqs/
- https://aws.amazon.com/codebuild/faqs/
- https://aws.amazon.com/codedeploy/faqs/
- https://aws.amazon.com/cloudformation/faqs/
- https://aws.amazon.com/cdk/faqs/
- https://aws.amazon.com/systems-manager/faq/
- https://aws.amazon.com/cloudwatch/faqs/
- https://aws.amazon.com/eventbridge/faqs/
- https://aws.amazon.com/config/faq/
- https://aws.amazon.com/organizations/faqs/

#### AIF-C01 (AI Practitioner)
- https://aws.amazon.com/bedrock/faqs/
- https://aws.amazon.com/sagemaker/faqs/
- https://aws.amazon.com/comprehend/faqs/
- https://aws.amazon.com/rekognition/faqs/
- https://aws.amazon.com/textract/faqs/
- https://aws.amazon.com/polly/faqs/
- https://aws.amazon.com/transcribe/faqs/
- https://aws.amazon.com/kendra/faqs/
- https://aws.amazon.com/lex/faqs/
- https://aws.amazon.com/personalize/faqs/

#### SAA-C03 (Solutions Architect)
- https://aws.amazon.com/ec2/faqs/
- https://aws.amazon.com/s3/faqs/
- https://aws.amazon.com/rds/faqs/
- https://aws.amazon.com/vpc/faqs/
- https://aws.amazon.com/elasticloadbalancing/faqs/
- https://aws.amazon.com/autoscaling/faqs/
- https://aws.amazon.com/route53/faqs/
- https://aws.amazon.com/cloudfront/faqs/
- https://aws.amazon.com/lambda/faqs/
- https://aws.amazon.com/dynamodb/faqs/

## Workflow de Geração de Conteúdo

```
1. fetch → Baixar FAQ do serviço AWS
2. Extrair conceitos-chave e cenários
3. Gerar questões baseadas em cenários reais
4. filesystem → Salvar no banco de questões
5. Validar distribuição por domínio
```

## Distribuição de Questões (3x exame)

| Cert | Exame | Banco | Domínios |
|------|-------|-------|----------|
| CLF-C02 | 65 | 200 | 4 |
| DVA-C02 | 65 | 200 | 4 |
| SAA-C03 | 65 | 200 | 4 |
| DOP-C02 | 75 | 225 | 6 |
| AIF-C01 | 85 | 255 | 5 |
