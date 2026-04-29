/**
 * Content Bridge для веб-версии
 * Инжектирует скрипт обработчика в контекст страницы VK
 */

const requestEventName = 'tool42-vk-api-request';
const responseEventName = 'tool42-vk-api-response';

function isTool42BridgeTab() {
    return window.location.search.includes('tool42_bridge=1');
}

function ensureBridgeTabOverlay() {
    if (!isTool42BridgeTab() || document.getElementById('tool42-vk-bridge-overlay')) {
        return;
    }

    const titleText = 'VK Bridge for Tool 42';
    const setTitle = () => {
        if (document.title !== titleText) {
            document.title = titleText;
        }
    };

    setTitle();
    const titleIntervalId = window.setInterval(setTitle, 1000);
    window.addEventListener(
        'beforeunload',
        () => {
            window.clearInterval(titleIntervalId);
        },
        { once: true }
    );

    const lockScroll = () => {
        if (document.documentElement) {
            document.documentElement.style.overflow = 'hidden';
        }

        if (document.body) {
            document.body.style.overflow = 'hidden';
        }
    };

    lockScroll();
    document.addEventListener('DOMContentLoaded', lockScroll, { once: true });

    const overlay = document.createElement('div');
    overlay.id = 'tool42-vk-bridge-overlay';
    Object.assign(overlay.style, {
        position: 'fixed',
        inset: '0',
        zIndex: '2147483647',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
        background: '#0c121c',
        color: '#ffffff',
        fontFamily: 'system-ui, sans-serif',
        textAlign: 'center'
    });

    const content = document.createElement('div');
    Object.assign(content.style, {
        maxWidth: '560px',
        padding: '32px 28px',
        borderRadius: '20px',
        background: 'linear-gradient(180deg, #2b73ea, #1f56b5)',
        boxShadow: '0 20px 80px rgba(0, 0, 0, 0.35)'
    });

    const title = document.createElement('div');
    title.textContent = 'VK Bridge for Tool 42';
    Object.assign(title.style, {
        fontSize: '28px',
        fontWeight: '700',
        lineHeight: '34px',
        marginBottom: '16px'
    });

    const description = document.createElement('div');
    description.textContent =
        'Эта вкладка используется приложением Tool 42 для запросов к VK API. Не закрывайте её пока пользуетесь приложением.';
    Object.assign(description.style, {
        fontSize: '16px',
        lineHeight: '24px',
        opacity: '1'
    });

    content.appendChild(title);
    content.appendChild(description);
    overlay.appendChild(content);

    const mountOverlay = () => {
        if (!document.body || document.getElementById('tool42-vk-bridge-overlay')) {
            return;
        }

        document.body.appendChild(overlay);
    };

    mountOverlay();

    if (!document.body) {
        document.addEventListener('DOMContentLoaded', mountOverlay, { once: true });
    }
}

// Инжектируем скрипт обработчика
function injectBridgeHandler() {
    const injectedScript = document.createElement('script');
    injectedScript.src = '/vk-iframe-handler.js'; // путь к файлу на вашем сервере
    injectedScript.async = false;
    (document.head || document.documentElement).appendChild(injectedScript);
    injectedScript.remove();
}

ensureBridgeTabOverlay();

if (isTool42BridgeTab()) {
    injectBridgeHandler();
}

// Обработка сообщений от основного приложения
window.addEventListener('message', (event) => {
    if (event.data?.type === 'tool42-vk-api-call') {
        console.log('[tool42][content-web] VK API request', {
            method: event.data.method,
            params: event.data.params
        });

        const requestId = event.data.requestId || `tool42_${Date.now()}_${Math.random().toString(16).slice(2)}`;
        let timeoutId = 0;

        function onResponse(responseEvent) {
            if (responseEvent.data?.type !== 'tool42-vk-api-response') {
                return;
            }

            if (responseEvent.data?.requestId !== requestId) {
                return;
            }

            window.clearTimeout(timeoutId);
            window.removeEventListener('message', onResponse);
            console.log('[tool42][content-web] VK API response', responseEvent.data);
            
            // Отправляем ответ обратно
            event.source.postMessage(responseEvent.data, '*');
        }

        timeoutId = window.setTimeout(() => {
            window.removeEventListener('message', onResponse);
            console.error('[tool42][content-web] VK page bridge timeout', {
                method: event.data.method,
                params: event.data.params
            });
            
            event.source.postMessage({
                type: 'tool42-vk-api-response',
                requestId,
                error: 'VK page bridge timeout'
            }, '*');
        }, 15000);

        window.addEventListener('message', onResponse);
    }
});
