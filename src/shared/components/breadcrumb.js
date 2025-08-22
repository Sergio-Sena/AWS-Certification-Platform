// Breadcrumb Navigation Component
function createBreadcrumb(currentCert) {
    const certNames = {
        'clf-c02': 'CLF-C02',
        'dva-c02': 'DVA-C02', 
        'saa-c03': 'SAA-C03'
    };
    
    return `
        <nav class="breadcrumb" role="navigation" aria-label="Breadcrumb">
            <a href="../index.html" class="breadcrumb-home">
                <i class="fas fa-home"></i> Home
            </a>
            <span class="breadcrumb-separator">></span>
            <span class="breadcrumb-current">${certNames[currentCert] || currentCert}</span>
        </nav>
    `;
}

// CSS para breadcrumb
const breadcrumbCSS = `
    .breadcrumb {
        background: #f8f9fa;
        padding: 1rem 0;
        margin-bottom: 2rem;
        border-bottom: 1px solid #e9ecef;
    }
    
    .breadcrumb-home {
        color: var(--primary-color);
        text-decoration: none;
        font-weight: 500;
        transition: color 0.3s ease;
    }
    
    .breadcrumb-home:hover {
        color: var(--secondary-color);
    }
    
    .breadcrumb-separator {
        margin: 0 0.5rem;
        color: #6c757d;
    }
    
    .breadcrumb-current {
        color: #495057;
        font-weight: 600;
    }
`;

// Adicionar CSS ao documento
function addBreadcrumbStyles() {
    const style = document.createElement('style');
    style.textContent = breadcrumbCSS;
    document.head.appendChild(style);
}

// Inserir breadcrumb no início do main
function insertBreadcrumb(certType) {
    const main = document.querySelector('main');
    if (main) {
        const breadcrumbHTML = createBreadcrumb(certType);
        main.insertAdjacentHTML('afterbegin', breadcrumbHTML);
        addBreadcrumbStyles();
    }
}

// Exportar funções
window.insertBreadcrumb = insertBreadcrumb;