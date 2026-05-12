"""
FinOps Cost Report - Relatório de custos com insights Bedrock + envio SES
Tag: Project=aws-certification-platform
"""
import os
import json
import boto3
from datetime import datetime, timezone, timedelta

REGION = os.environ.get('AWS_REGION', 'us-east-1')
MODEL_ID = 'anthropic.claude-3-haiku-20240307-v1:0'
PROJECT_TAG = 'aws-certification-platform'
SES_EMAIL = 'senanetworker@gmail.com'

ce = boto3.client('ce', region_name='us-east-1')
bedrock = boto3.client('bedrock-runtime', region_name=REGION)
ses = boto3.client('ses', region_name=REGION)


def get_costs():
    """Consulta Cost Explorer filtrado por tag Project."""
    now = datetime.now(timezone.utc)
    start_current = now.replace(day=1).strftime('%Y-%m-%d')
    end_current = now.strftime('%Y-%m-%d')

    start_previous = (now.replace(day=1) - timedelta(days=1)).replace(day=1).strftime('%Y-%m-%d')
    end_previous = now.replace(day=1).strftime('%Y-%m-%d')

    def query_period(start, end):
        try:
            response = ce.get_cost_and_usage(
                TimePeriod={'Start': start, 'End': end},
                Granularity='MONTHLY',
                Metrics=['UnblendedCost'],
                Filter={
                    'Tags': {
                        'Key': 'Project',
                        'Values': [PROJECT_TAG]
                    }
                },
                GroupBy=[{'Type': 'DIMENSION', 'Key': 'SERVICE'}]
            )
            return response.get('ResultsByTime', [])
        except Exception as e:
            print(f"⚠️ Cost Explorer error: {e}")
            return []

    current = query_period(start_current, end_current)
    previous = query_period(start_previous, end_previous)
    return current, previous


def parse_costs(results):
    """Extrai custos por serviço."""
    services = {}
    for period in results:
        for group in period.get('Groups', []):
            service = group['Keys'][0]
            amount = float(group['Metrics']['UnblendedCost']['Amount'])
            services[service] = services.get(service, 0) + amount
    return services


def get_bedrock_insights(current_costs, previous_costs):
    """Gera 3 insights com Bedrock Claude."""
    prompt = f"""Analise os custos AWS do projeto "{PROJECT_TAG}" (plataforma de certificação, site estático em S3+CloudFront).

Custos mês atual: {json.dumps(current_costs, indent=2)}
Custos mês anterior: {json.dumps(previous_costs, indent=2)}

Target: ~$0 (site estático em CDN compartilhado)

Forneça exatamente 3 insights curtos (1 linha cada):
1. Status geral do custo
2. Maior gasto e se é esperado
3. Recomendação de otimização (se aplicável)

Formato: bullet points, direto ao ponto, em português."""

    response = bedrock.invoke_model(
        modelId=MODEL_ID,
        contentType='application/json',
        accept='application/json',
        body=json.dumps({
            'anthropic_version': 'bedrock-2023-05-31',
            'max_tokens': 512,
            'messages': [{'role': 'user', 'content': prompt}]
        })
    )
    result = json.loads(response['body'].read())
    return result['content'][0]['text']


def build_email_html(current_costs, previous_costs, insights):
    """Monta email HTML dark theme com barras visuais."""
    now = datetime.now(timezone.utc).strftime('%d/%m/%Y %H:%M UTC')
    total_current = sum(current_costs.values())
    total_previous = sum(previous_costs.values())
    diff = total_current - total_previous
    diff_icon = '📈' if diff > 0 else '📉' if diff < 0 else '➡️'

    services_html = ''
    max_cost = max(current_costs.values()) if current_costs else 1
    for service, cost in sorted(current_costs.items(), key=lambda x: x[1], reverse=True):
        bar_width = int((cost / max_cost) * 100) if max_cost > 0 else 0
        services_html += f'''
        <tr>
            <td style="padding:8px;color:#ccc;">{service}</td>
            <td style="padding:8px;width:200px;">
                <div style="background:#333;border-radius:4px;overflow:hidden;">
                    <div style="background:linear-gradient(90deg,#06B6D4,#8B5CF6);width:{bar_width}%;height:20px;"></div>
                </div>
            </td>
            <td style="padding:8px;color:#fff;text-align:right;">${cost:.4f}</td>
        </tr>'''

    return f'''
    <html>
    <body style="background:#1a1a2e;color:#eee;font-family:Inter,sans-serif;padding:20px;">
        <div style="max-width:600px;margin:0 auto;background:#16213e;border-radius:12px;padding:24px;">
            <h1 style="color:#06B6D4;margin:0;">💰 FinOps Report</h1>
            <p style="color:#888;margin:4px 0 20px;">{PROJECT_TAG} | {now}</p>

            <div style="display:flex;gap:16px;margin-bottom:20px;">
                <div style="background:#0f3460;padding:16px;border-radius:8px;flex:1;text-align:center;">
                    <div style="color:#888;font-size:12px;">MÊS ATUAL</div>
                    <div style="color:#06B6D4;font-size:24px;font-weight:bold;">${total_current:.4f}</div>
                </div>
                <div style="background:#0f3460;padding:16px;border-radius:8px;flex:1;text-align:center;">
                    <div style="color:#888;font-size:12px;">MÊS ANTERIOR</div>
                    <div style="color:#8B5CF6;font-size:24px;font-weight:bold;">${total_previous:.4f}</div>
                </div>
                <div style="background:#0f3460;padding:16px;border-radius:8px;flex:1;text-align:center;">
                    <div style="color:#888;font-size:12px;">{diff_icon} VARIAÇÃO</div>
                    <div style="color:{'#ef4444' if diff > 0 else '#10b981'};font-size:24px;font-weight:bold;">${diff:+.4f}</div>
                </div>
            </div>

            <h2 style="color:#fff;font-size:16px;">Custos por Serviço</h2>
            <table style="width:100%;border-collapse:collapse;">
                {services_html if services_html else '<tr><td style="color:#888;padding:8px;">Nenhum custo registrado ✅</td></tr>'}
            </table>

            <h2 style="color:#fff;font-size:16px;margin-top:20px;">🤖 Insights (Claude 3 Haiku)</h2>
            <div style="background:#0f3460;padding:16px;border-radius:8px;color:#ccc;white-space:pre-line;">
                {insights}
            </div>

            <p style="color:#555;font-size:11px;margin-top:20px;text-align:center;">
                AWS Certification Platform | FinOps Automated Report
            </p>
        </div>
    </body>
    </html>'''


def send_email(html):
    """Envia email via SES."""
    ses.send_email(
        Source=SES_EMAIL,
        Destination={'ToAddresses': [SES_EMAIL]},
        Message={
            'Subject': {
                'Data': f'💰 FinOps | {PROJECT_TAG} | {datetime.now(timezone.utc).strftime("%d/%m/%Y")}',
                'Charset': 'UTF-8'
            },
            'Body': {
                'Html': {'Data': html, 'Charset': 'UTF-8'}
            }
        }
    )


def main():
    print(f"{'='*50}")
    print(f"💰 FinOps Cost Report - {PROJECT_TAG}")
    print(f"📅 {datetime.now(timezone.utc).strftime('%Y-%m-%d %H:%M UTC')}")
    print(f"{'='*50}\n")

    print("📊 Consultando Cost Explorer...")
    current_raw, previous_raw = get_costs()
    current_costs = parse_costs(current_raw)
    previous_costs = parse_costs(previous_raw)

    total = sum(current_costs.values())
    print(f"💵 Custo mês atual: ${total:.4f}")
    print(f"💵 Custo mês anterior: ${sum(previous_costs.values()):.4f}")

    print("\n🤖 Gerando insights com Bedrock...")
    insights = get_bedrock_insights(current_costs, previous_costs)
    print(insights)

    print("\n📧 Enviando relatório por email...")
    html = build_email_html(current_costs, previous_costs, insights)
    send_email(html)
    print(f"✅ Email enviado para {SES_EMAIL}")


if __name__ == '__main__':
    main()
