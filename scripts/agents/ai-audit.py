"""
AI Audit - 5 agentes Bedrock Claude para auditoria do projeto
Agentes: Security, FinOps, Code Quality, Compliance LGPD, Performance
"""
import os
import json
import glob
import boto3
from datetime import datetime, timezone

REGION = os.environ.get('AWS_REGION', 'us-east-1')
MODEL_ID = 'anthropic.claude-3-haiku-20240307-v1:0'
PROJECT_NAME = 'aws-certification-platform'

bedrock = boto3.client('bedrock-runtime', region_name=REGION)


def invoke_claude(prompt):
    response = bedrock.invoke_model(
        modelId=MODEL_ID,
        contentType='application/json',
        accept='application/json',
        body=json.dumps({
            'anthropic_version': 'bedrock-2023-05-31',
            'max_tokens': 1024,
            'messages': [{'role': 'user', 'content': prompt}]
        })
    )
    result = json.loads(response['body'].read())
    return result['content'][0]['text']


def collect_code():
    """Coleta código JS/HTML do projeto para análise."""
    code_samples = []
    patterns = ['public/**/*.js', 'public/**/*.html', 'src/**/*.js']
    for pattern in patterns:
        for filepath in glob.glob(pattern, recursive=True):
            try:
                with open(filepath, 'r', encoding='utf-8') as f:
                    content = f.read()[:2000]
                code_samples.append(f"--- {filepath} ---\n{content}")
            except Exception:
                continue
    return '\n\n'.join(code_samples[:10])


def audit_security(code):
    prompt = f"""Analise este código de uma plataforma de certificação AWS (front-end estático).
Verifique APENAS:
1. Secrets/credentials expostos (AWS keys, tokens, passwords)
2. Permissões IAM excessivas em referências
3. Dados sensíveis em código client-side
4. XSS ou injection vulnerabilities

Responda em formato:
- PASS ou FAIL para cada item
- Resumo em 1 linha

Código:
{code[:3000]}"""
    return invoke_claude(prompt)


def audit_finops(code):
    prompt = f"""Analise este projeto estático hospedado em S3+CloudFront (CDN compartilhado).
Verifique:
1. Arquivos desnecessariamente grandes (bundles, imagens)
2. Cache headers adequados
3. Recursos que poderiam ser otimizados
4. Estimativa de custo (deve ser ~$0 para site estático)

Responda: PASS/FAIL por item + resumo.

Código:
{code[:3000]}"""
    return invoke_claude(prompt)


def audit_code_quality(code):
    prompt = f"""Analise qualidade do código JavaScript deste projeto:
1. Error handling adequado
2. Valores hardcoded que deveriam ser configuráveis
3. Validação de inputs
4. Código duplicado
5. Padrões inconsistentes

Responda: PASS/FAIL por item + resumo.

Código:
{code[:3000]}"""
    return invoke_claude(prompt)


def audit_compliance(code):
    prompt = f"""Analise compliance LGPD/GDPR deste projeto (plataforma de estudos):
1. Coleta de dados pessoais (localStorage, cookies)
2. Consentimento do usuário
3. Política de retenção de dados
4. Direito ao esquecimento implementável

Responda: PASS/FAIL por item + resumo.

Código:
{code[:3000]}"""
    return invoke_claude(prompt)


def audit_performance(code):
    prompt = f"""Analise performance deste front-end estático:
1. Carregamento de scripts (defer/async)
2. Tamanho de bundles JS
3. Lazy loading de recursos
4. Render-blocking resources
5. Cache strategy

Responda: PASS/FAIL por item + resumo.

Código:
{code[:3000]}"""
    return invoke_claude(prompt)


def main():
    print(f"{'='*60}")
    print(f"🤖 AI Audit - {PROJECT_NAME}")
    print(f"📅 {datetime.now(timezone.utc).strftime('%Y-%m-%d %H:%M UTC')}")
    print(f"🧠 Model: {MODEL_ID}")
    print(f"{'='*60}\n")

    code = collect_code()
    if not code:
        print("⚠️ No code files found to analyze")
        return

    audits = [
        ('🔒 Security', audit_security),
        ('💰 FinOps', audit_finops),
        ('📝 Code Quality', audit_code_quality),
        ('📋 Compliance LGPD/GDPR', audit_compliance),
        ('⚡ Performance', audit_performance),
    ]

    results = []
    for name, func in audits:
        print(f"\n{'─'*40}")
        print(f"{name}")
        print(f"{'─'*40}")
        try:
            result = func(code)
            print(result)
            has_fail = 'FAIL' in result.upper()
            results.append((name, 'FAIL' if has_fail else 'PASS'))
        except Exception as e:
            print(f"❌ Error: {e}")
            results.append((name, 'ERROR'))

    print(f"\n{'='*60}")
    print("📊 RESUMO")
    print(f"{'='*60}")
    for name, status in results:
        icon = '✅' if status == 'PASS' else '❌' if status == 'FAIL' else '⚠️'
        print(f"  {icon} {name}: {status}")

    failures = [r for r in results if r[1] == 'FAIL']
    if failures:
        print(f"\n⚠️ {len(failures)} audit(s) com FAIL (non-blocking)")
        # Descomentar para bloquear pipeline:
        # exit(1)
    else:
        print("\n✅ All audits passed!")


if __name__ == '__main__':
    main()
