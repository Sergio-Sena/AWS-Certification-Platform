// Shared Study Tools — Renderiza Keyword Signals e Service Comparator
// Incluir em qualquer certificação para adicionar as ferramentas de estudo

function renderKeywordSignals(examFilter) {
    const signals = window.keywordSignals;
    if (!signals) return '';

    const relevant = [
        ...signals.universal,
        ...(signals[examFilter] || [])
    ];

    return `
        <div style="background:white;border-radius:12px;padding:2rem;margin:1.5rem 0;box-shadow:0 2px 10px rgba(0,0,0,0.08);">
            <h3 style="margin-bottom:1rem;">🔑 Keyword Signals — Palavras-chave do Exame</h3>
            <p style="color:#666;margin-bottom:1.5rem;font-size:0.9rem;">Quando a questão usar essas palavras, pense nestes serviços:</p>
            <table style="width:100%;border-collapse:collapse;font-size:0.9rem;">
                <thead>
                    <tr style="background:#f8f9fa;border-bottom:2px solid #e0e0e0;">
                        <th style="padding:0.75rem;text-align:left;">Se a questão diz...</th>
                        <th style="padding:0.75rem;text-align:left;">Pense em...</th>
                    </tr>
                </thead>
                <tbody>
                    ${relevant.map(s => `
                        <tr style="border-bottom:1px solid #f0f0f0;">
                            <td style="padding:0.6rem 0.75rem;font-weight:600;color:#1a56db;">"${s.keyword}"</td>
                            <td style="padding:0.6rem 0.75rem;">${s.signal}</td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        </div>
    `;
}

function renderServiceComparator(examFilter) {
    const comparator = window.serviceComparator;
    if (!comparator) return '';

    const examUpper = examFilter.toUpperCase();
    const relevant = Object.entries(comparator).filter(([_, v]) => 
        v.exams.some(e => e === examUpper || e === 'ALL')
    );

    if (!relevant.length) return '';

    return `
        <div style="background:white;border-radius:12px;padding:2rem;margin:1.5rem 0;box-shadow:0 2px 10px rgba(0,0,0,0.08);">
            <h3 style="margin-bottom:1rem;">⚖️ Service Comparator — Serviços Confusos</h3>
            <p style="color:#666;margin-bottom:1.5rem;font-size:0.9rem;">Pares de serviços que mais confundem no exame:</p>
            ${relevant.map(([key, comp]) => `
                <details style="margin-bottom:1rem;border:1px solid #e0e0e0;border-radius:8px;overflow:hidden;">
                    <summary style="padding:1rem;background:#f8f9fa;cursor:pointer;font-weight:600;">${comp.title}</summary>
                    <div style="padding:1rem;overflow-x:auto;">
                        <table style="width:100%;border-collapse:collapse;font-size:0.85rem;">
                            ${comp.table.map((row, i) => `
                                <tr style="${i === 0 ? 'background:#232f3e;color:white;' : i % 2 === 0 ? 'background:#f8f9fa;' : ''}">
                                    ${row.map(cell => `<${i === 0 ? 'th' : 'td'} style="padding:0.5rem 0.75rem;border:1px solid #e0e0e0;text-align:left;">${cell}</${i === 0 ? 'th' : 'td'}>`).join('')}
                                </tr>
                            `).join('')}
                        </table>
                        <p style="margin-top:0.75rem;padding:0.5rem;background:#e8f4fd;border-radius:4px;font-size:0.85rem;">
                            <strong>📌 Regra:</strong> ${comp.keyword_signal}
                        </p>
                    </div>
                </details>
            `).join('')}
        </div>
    `;
}

// Auto-render se existir container
document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('study-tools');
    if (!container) return;
    const exam = container.dataset.exam || 'clf';
    container.innerHTML = renderKeywordSignals(exam) + renderServiceComparator(exam);
});
