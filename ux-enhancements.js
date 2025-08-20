// UX Enhancements - Melhorias na Experiência do Usuário
// Este arquivo contém funcionalidades adicionais para melhorar a UX

// Keyboard Navigation Support
document.addEventListener('DOMContentLoaded', function() {
    // Adicionar suporte para navegação por teclado nos cards de estudo (com delay)
    setTimeout(() => {
        const studyCards = document.querySelectorAll('.study-card');
        studyCards.forEach(card => {
            card.setAttribute('tabindex', '0');
            card.addEventListener('keydown', function(e) {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    card.click();
                }
            });
        });
    }, 100);

    // Melhorar navegação por teclado nas opções do exame (com verificação)
    document.addEventListener('keydown', function(e) {
        if (examState.isActive && document.getElementById('exam-interface').style.display !== 'none') {
            const options = document.querySelectorAll('.option');
            if (options.length === 0) return;
            
            const currentFocus = document.activeElement;
            const currentIndex = Array.from(options).indexOf(currentFocus);

            switch(e.key) {
                case 'ArrowDown':
                    e.preventDefault();
                    const nextIndex = (currentIndex + 1) % options.length;
                    options[nextIndex].focus();
                    break;
                case 'ArrowUp':
                    e.preventDefault();
                    const prevIndex = currentIndex > 0 ? currentIndex - 1 : options.length - 1;
                    options[prevIndex].focus();
                    break;
                case 'Enter':
                case ' ':
                    if (currentFocus && currentFocus.classList.contains('option')) {
                        e.preventDefault();
                        currentFocus.click();
                    }
                    break;
            }
        }
    });
    
    // Prevenir cliques fantasma em dispositivos touch
    let touchStartTime = 0;
    document.addEventListener('touchstart', function() {
        touchStartTime = Date.now();
    });
    
    document.addEventListener('click', function(e) {
        if (touchStartTime > 0 && Date.now() - touchStartTime < 50) {
            e.preventDefault();
            e.stopPropagation();
            return false;
        }
    }, true);
});

// Auto-save Progress
function autoSaveProgress() {
    // Só salvar se há progresso significativo
    if (assessmentState.completed || examState.currentQuestion > 0 || (currentTopic && currentTopic !== null)) {
        const progressData = {
            currentSection,
            assessmentState,
            examState: {
                ...examState,
                timer: null
            },
            timestamp: new Date().toISOString()
        };
        
        localStorage.setItem('aws-dva-c02-autosave', JSON.stringify(progressData));
    }
}

// Load Auto-saved Progress
function loadAutoSavedProgress() {
    const saved = localStorage.getItem('aws-dva-c02-autosave');
    if (saved) {
        try {
            const data = JSON.parse(saved);
            const timeDiff = new Date() - new Date(data.timestamp);
            
            // Só restaurar se foi salvo nas últimas 24 horas e tem progresso REAL
            const hasRealProgress = data.assessmentState.completed || 
                                  data.examState.currentQuestion > 0 || 
                                  Object.keys(data.assessmentState.answers).length > 0 ||
                                  Object.keys(data.examState.answers).length > 0;
            
            if (timeDiff < 24 * 60 * 60 * 1000 && hasRealProgress) {
                if (confirm('Encontramos um progresso salvo. Deseja continuar de onde parou?')) {
                    currentSection = data.currentSection;
                    assessmentState = data.assessmentState;
                    
                    if (data.examState.isActive) {
                        examState = data.examState;
                        examState.isActive = false;
                    }
                    
                    showSection(currentSection);
                    return true;
                } else {
                    // Se usuário recusar, limpar o progresso salvo
                    localStorage.removeItem('aws-dva-c02-autosave');
                }
            } else if (!hasRealProgress) {
                // Limpar dados inválidos
                localStorage.removeItem('aws-dva-c02-autosave');
            }
        } catch (e) {
            console.warn('Erro ao carregar progresso salvo:', e);
            localStorage.removeItem('aws-dva-c02-autosave');
        }
    }
    return false;
}

// Performance Monitoring
const performanceMonitor = {
    startTime: null,
    interactions: [],
    
    start() {
        this.startTime = performance.now();
    },
    
    recordInteraction(type, element) {
        this.interactions.push({
            type,
            element: element.tagName + (element.id ? '#' + element.id : ''),
            timestamp: performance.now() - this.startTime
        });
    },
    
    getReport() {
        return {
            totalTime: performance.now() - this.startTime,
            interactions: this.interactions.length,
            averageResponseTime: this.interactions.reduce((acc, curr, idx, arr) => {
                if (idx === 0) return 0;
                return acc + (curr.timestamp - arr[idx-1].timestamp);
            }, 0) / Math.max(this.interactions.length - 1, 1)
        };
    }
};

// Smooth Scrolling for Better UX
function smoothScrollTo(element) {
    element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

// Toast Notifications
function showToast(message, type = 'info', duration = 3000) {
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `
        <div class="toast-content">
            <span class="toast-icon">${getToastIcon(type)}</span>
            <span class="toast-message">${message}</span>
            <button class="toast-close" onclick="this.parentElement.parentElement.remove()" aria-label="Fechar notificação">&times;</button>
        </div>
    `;
    
    // Adicionar estilos se não existirem
    if (!document.querySelector('#toast-styles')) {
        const styles = document.createElement('style');
        styles.id = 'toast-styles';
        styles.textContent = `
            .toast {
                position: fixed;
                top: 20px;
                right: 20px;
                background: white;
                border-radius: 8px;
                box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
                z-index: 1000;
                animation: slideInRight 0.3s ease;
                max-width: 400px;
                border-left: 4px solid #007eb9;
            }
            .toast-success { border-left-color: #28a745; }
            .toast-error { border-left-color: #dc3545; }
            .toast-warning { border-left-color: #ffc107; }
            .toast-content {
                display: flex;
                align-items: center;
                padding: 1rem;
                gap: 0.5rem;
            }
            .toast-icon { font-size: 1.2rem; }
            .toast-message { flex: 1; }
            .toast-close {
                background: none;
                border: none;
                font-size: 1.5rem;
                cursor: pointer;
                color: #666;
                padding: 0;
                width: 24px;
                height: 24px;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            @keyframes slideInRight {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
        `;
        document.head.appendChild(styles);
    }
    
    document.body.appendChild(toast);
    
    setTimeout(() => {
        if (toast.parentElement) {
            toast.style.animation = 'slideInRight 0.3s ease reverse';
            setTimeout(() => toast.remove(), 300);
        }
    }, duration);
}

function getToastIcon(type) {
    const icons = {
        'success': '✅',
        'error': '❌',
        'warning': '⚠️',
        'info': 'ℹ️'
    };
    return icons[type] || icons.info;
}

// Enhanced Error Handling
window.addEventListener('error', function(e) {
    console.error('Erro capturado:', e.error);
    showToast('Ops! Algo deu errado. Tente recarregar a página.', 'error');
});

// Connection Status Monitor
function monitorConnection() {
    window.addEventListener('online', () => {
        showToast('Conexão restaurada!', 'success');
    });
    
    window.addEventListener('offline', () => {
        showToast('Você está offline. Algumas funcionalidades podem não funcionar.', 'warning', 5000);
    });
}

// Initialize UX Enhancements
document.addEventListener('DOMContentLoaded', function() {
    performanceMonitor.start();
    monitorConnection();
    
    // Auto-save a cada 60 segundos (reduzido frequência)
    setInterval(autoSaveProgress, 60000);
    
    // Tentar carregar progresso salvo apenas após interação do usuário
    let hasInteracted = false;
    const checkForSavedProgress = () => {
        if (!hasInteracted) {
            hasInteracted = true;
            setTimeout(() => {
                loadAutoSavedProgress();
            }, 500);
        }
    };
    
    document.addEventListener('click', checkForSavedProgress, { once: true });
    document.addEventListener('keydown', checkForSavedProgress, { once: true });
});

// Clear saved progress
function clearSavedProgress() {
    localStorage.removeItem('aws-dva-c02-autosave');
    localStorage.removeItem('dva-c02-progress');
    localStorage.removeItem('examHistory');
    showToast('Progresso limpo com sucesso!', 'success');
}

// Export functions for use in main script
window.UXEnhancements = {
    showToast,
    autoSaveProgress,
    loadAutoSavedProgress,
    performanceMonitor,
    smoothScrollTo,
    clearSavedProgress
};