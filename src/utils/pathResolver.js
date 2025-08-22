// Utilitário para resolver caminhos de arquivos
export class PathResolver {
    static getBasePath() {
        // Detecta se está em desenvolvimento ou produção
        const isDev = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
        return isDev ? '/' : '/AWS-Certification-Platform/';
    }

    static getCertificationPath(certCode) {
        return `${this.getBasePath()}public/${certCode}/`;
    }

    static getSharedPath() {
        return `${this.getBasePath()}src/`;
    }

    static getAssetPath(assetType) {
        return `${this.getBasePath()}src/assets/${assetType}/`;
    }

    static resolveDataPath(certCode, fileName) {
        return `${this.getCertificationPath(certCode)}data/${fileName}`;
    }

    static resolveCSSPath(certCode, fileName) {
        return `${this.getCertificationPath(certCode)}css/${fileName}`;
    }

    static resolveJSPath(certCode, fileName) {
        return `${this.getCertificationPath(certCode)}js/${fileName}`;
    }
}

// Função helper para carregar scripts dinamicamente
export function loadScript(src) {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
    });
}

// Função helper para carregar CSS dinamicamente
export function loadCSS(href) {
    return new Promise((resolve, reject) => {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = href;
        link.onload = resolve;
        link.onerror = reject;
        document.head.appendChild(link);
    });
}