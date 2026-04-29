/**
 * VK API Bridge для веб-сайта
 * Использует скрытый iframe для доступа к VK API
 */

class VKAPIBridge {
    constructor() {
        this.vkFrameId = 'vk-bridge-frame';
        this.vkFrameUrl = 'https://vk.com/feed?tool42_bridge=1';
        this.messageId = 0;
        this.pendingRequests = new Map();
        this.initialized = false;
    }

    /**
     * Инициализация моста
     */
    async init() {
        if (this.initialized) return;

        // Создаем скрытый iframe для VK
        let frame = document.getElementById(this.vkFrameId);
        if (!frame) {
            frame = document.createElement('iframe');
            frame.id = this.vkFrameId;
            frame.src = this.vkFrameUrl;
            frame.style.display = 'none';
            document.body.appendChild(frame);
        }

        // Слушаем сообщения от iframe
        window.addEventListener('message', (event) => this._handleMessage(event));

        // Ждем загрузки iframe
        await this._waitForFrameReady(frame);
        this.initialized = true;
    }

    /**
     * Отправляет VK API запрос
     */
    async callVKAPI(method, params = {}) {
        if (!this.initialized) {
            await this.init();
        }

        const requestId = ++this.messageId;
        const frame = document.getElementById(this.vkFrameId);

        if (!frame) {
            throw new Error('VK bridge frame is not available');
        }

        console.log('[tool42][web] VK API request', {
            method,
            params,
            requestId
        });

        // Создаем promise для ответа
        const responsePromise = new Promise((resolve, reject) => {
            const timeout = setTimeout(() => {
                this.pendingRequests.delete(requestId);
                reject(new Error(`VK API timeout for method: ${method}`));
            }, 30000); // 30 секунд таймаут

            this.pendingRequests.set(requestId, {
                resolve,
                reject,
                timeout
            });
        });

        // Отправляем запрос в iframe
        frame.contentWindow.postMessage(
            {
                type: 'tool42-vk-api-call',
                requestId,
                method,
                params
            },
            '*'
        );

        return responsePromise;
    }

    /**
     * Обработка сообщений от iframe
     */
    _handleMessage(event) {
        // Проверяем origin для безопасности
        if (event.origin !== 'https://vk.com' && event.origin !== 'https://vk.ru') {
            return;
        }

        const { type, requestId, response, error } = event.data;

        if (type !== 'tool42-vk-api-response') {
            return;
        }

        const pending = this.pendingRequests.get(requestId);
        if (!pending) {
            return;
        }

        clearTimeout(pending.timeout);
        this.pendingRequests.delete(requestId);

        console.log('[tool42][web] VK API response', response);

        if (error) {
            pending.reject(new Error(error));
        } else {
            pending.resolve(response);
        }
    }

    /**
     * Ожидание готовности iframe
     */
    _waitForFrameReady(frame) {
        return new Promise((resolve) => {
            const checkReady = () => {
                try {
                    // Проверяем доступность contentWindow
                    if (frame.contentWindow) {
                        resolve();
                        return;
                    }
                } catch {
                    // CORS или другая ошибка
                }
                setTimeout(checkReady, 100);
            };

            if (frame.complete || frame.readyState === 'complete') {
                resolve();
            } else {
                frame.addEventListener('load', resolve, { once: true });
            }

            checkReady();
        });
    }

    /**
     * Очистка ресурсов
     */
    destroy() {
        const frame = document.getElementById(this.vkFrameId);
        if (frame) {
            frame.remove();
        }
        this.pendingRequests.clear();
        this.initialized = false;
    }
}

// Экспортируем синглтон
const vkBridge = new VKAPIBridge();

export default vkBridge;
