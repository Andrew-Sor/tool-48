(function tool42VkPageBridge() {
    const requestEventName = 'tool42-vk-api-request';
    const responseEventName = 'tool42-vk-api-response';

    function getSerializedVkApiError(error) {
        if (!error || typeof error !== 'object') {
            return null;
        }

        try {
            const json = JSON.parse(JSON.stringify(error));
            if (json?.error) {
                return json;
            }
        } catch (_error) {}

        return null;
    }

    window.addEventListener(requestEventName, (event) => {
        const detail = event.detail || {};
        const { requestId, method, params } = detail;
        console.log('[tool42][page] VK API request', {
            method,
            params,
            hasVkApi: Boolean(window.vkApi)
        });

        const respond = (payload) => {
            console.log('[tool42][page] VK API response', payload);
            window.dispatchEvent(
                new CustomEvent(responseEventName, {
                    detail: {
                        requestId,
                        payload
                    }
                })
            );
        };

        const vkApi = window.vkApi;
        if (!vkApi || typeof vkApi.api !== 'function') {
            respond({
                error: {
                    error_msg: 'window.vkApi.api is not available'
                }
            });
            return;
        }

        try {
            const maybePromise = vkApi.api(method, params);

            if (maybePromise && typeof maybePromise.then === 'function') {
                maybePromise
                    .then((result) => {
                        if (result !== undefined) {
                            respond(result);
                        }
                    })
                    .catch((error) => {
                        console.error('[tool42][page] VK API promise error', error);
                        const serializedError = getSerializedVkApiError(error);
                        if (serializedError) {
                            respond(serializedError);
                            return;
                        }
                        respond({
                            error: {
                                error_msg: error instanceof Error ? error.message : String(error)
                            }
                        });
                    });
            } else if (maybePromise !== undefined) {
                respond(maybePromise);
            }
        } catch (error) {
            console.error('[tool42][page] VK API throw', error);
            const serializedError = getSerializedVkApiError(error);
            if (serializedError) {
                respond(serializedError);
                return;
            }
            respond({
                error: {
                    error_msg: error instanceof Error ? error.message : String(error)
                }
            });
        }
    });
})();
