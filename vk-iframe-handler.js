/**
 * Этот скрипт должен быть загружен на странице VK (внутри iframe)
 * Обрабатывает запросы VK API из основного приложения
 */

(function tool42VkIframeHandler() {
    window.addEventListener('message', async (event) => {
        // Проверяем origin для безопасности
        if (!event.origin.includes('localhost') && !event.origin.includes('127.0.0.1')) {
            // Для продакшена добавьте проверку вашего домена
            console.warn('[tool42][iframe] Message from untrusted origin:', event.origin);
        }

        const { type, requestId, method, params } = event.data;

        if (type !== 'tool42-vk-api-call') {
            return;
        }

        try {
            console.log('[tool42][vk-iframe] VK API call', { method, params });

            // Используем VK API (если доступен)
            if (typeof window.vkApi !== 'undefined' && typeof window.vkApi.api === 'function') {
                const maybePromise = window.vkApi.api(method, params);

                if (maybePromise && typeof maybePromise.then === 'function') {
                    maybePromise
                        .then((response) => {
                            console.log('[tool42][vk-iframe] VK API response', response);
                            event.source.postMessage(
                                {
                                    type: 'tool42-vk-api-response',
                                    requestId,
                                    response
                                },
                                '*'
                            );
                        })
                        .catch((error) => {
                            console.error('[tool42][vk-iframe] VK API error', error);
                            event.source.postMessage(
                                {
                                    type: 'tool42-vk-api-response',
                                    requestId,
                                    error: error instanceof Error ? error.message : String(error)
                                },
                                '*'
                            );
                        });
                } else if (maybePromise !== undefined) {
                    console.log('[tool42][vk-iframe] VK API response (sync)', maybePromise);
                    event.source.postMessage(
                        {
                            type: 'tool42-vk-api-response',
                            requestId,
                            response: maybePromise
                        },
                        '*'
                    );
                }
            } else {
                throw new Error('VK API (window.vkApi.api) is not available on this page');
            }
        } catch (error) {
            console.error('[tool42][vk-iframe] VK API bridge error', error);
            event.source.postMessage(
                {
                    type: 'tool42-vk-api-response',
                    requestId,
                    error: error instanceof Error ? error.message : String(error)
                },
                '*'
            );
        }
    });

    console.log('[tool42][vk-iframe] Handler initialized');
})();
