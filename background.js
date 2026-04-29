let tabId = 0;
const vkTabUrl = 'https://vk.com/feed?tool42_bridge=1';
const vkBridgeTabStorageKey = 'vkBridgeTabId';
const extensionTabUrl = chrome.runtime.getURL('index.html');

function isExtensionTab(tab) {
    return typeof tab?.url === 'string' && tab.url.startsWith(extensionTabUrl);
}

async function hasOpenExtensionTabs() {
    const tabs = await chrome.tabs.query({});
    return tabs.some(isExtensionTab);
}

async function closeVkBridgeTabIfUnused() {
    if (await hasOpenExtensionTabs()) {
        return;
    }

    const tabs = await chrome.tabs.query({});
    const bridgeTabs = tabs.filter((tab) => tab.url === vkTabUrl && typeof tab.id === 'number');

    if (!bridgeTabs.length) {
        await chrome.storage.session.remove(vkBridgeTabStorageKey);
        return;
    }

    await chrome.tabs.remove(bridgeTabs.map((tab) => tab.id));
    await chrome.storage.session.remove(vkBridgeTabStorageKey);
}

chrome.action.onClicked.addListener(() => {
    if (tabId) {
        chrome.tabs.update(tabId, { active: true });
    } else {
        chrome.tabs.create({ url: chrome.runtime.getURL('index.html') }, (tab) => (tabId = tab.id));
    }
});

chrome.tabs.onRemoved.addListener((eventTabId) => {
    if (eventTabId === tabId) {
        tabId = 0;
    }

    void (async () => {
        const storage = await chrome.storage.session.get(vkBridgeTabStorageKey);
        if (storage[vkBridgeTabStorageKey] === eventTabId) {
            await chrome.storage.session.remove(vkBridgeTabStorageKey);
        }

        await closeVkBridgeTabIfUnused();
    })();
});

chrome.tabs.onUpdated.addListener((_updatedTabId, changeInfo, tab) => {
    if (!('url' in changeInfo) && changeInfo.status !== 'complete') {
        return;
    }

    if (isExtensionTab(tab)) {
        return;
    }

    void closeVkBridgeTabIfUnused();
});

async function waitForTabComplete(tabIdToWait) {
    const tab = await chrome.tabs.get(tabIdToWait);
    if (tab.status === 'complete') {
        return;
    }

    await new Promise((resolve) => {
        const onUpdated = (updatedTabId, changeInfo) => {
            if (updatedTabId !== tabIdToWait || changeInfo.status !== 'complete') {
                return;
            }

            chrome.tabs.onUpdated.removeListener(onUpdated);
            resolve();
        };

        chrome.tabs.onUpdated.addListener(onUpdated);
    });
}

async function getVkTab() {
    const storage = await chrome.storage.session.get(vkBridgeTabStorageKey);
    const storedTabId = storage[vkBridgeTabStorageKey];

    if (typeof storedTabId === 'number') {
        try {
            const existingTab = await chrome.tabs.get(storedTabId);
            if (existingTab.id) {
                if (existingTab.url !== vkTabUrl) {
                    await chrome.tabs.update(existingTab.id, {
                        url: vkTabUrl,
                        active: false
                    });
                }

                return existingTab;
            }
        } catch {
            await chrome.storage.session.remove(vkBridgeTabStorageKey);
        }
    }

    const tab = await chrome.tabs.create({
        url: vkTabUrl,
        active: false
    });

    if (!tab.id) {
        throw new Error('VK tab was created without id');
    }

    await chrome.storage.session.set({
        [vkBridgeTabStorageKey]: tab.id
    });

    return tab;
}

chrome.runtime.onMessage.addListener((message, _sender, sendResponse) => {
    if (message?.type !== 'tool42-vk-api-call') {
        return undefined;
    }

    (async () => {
        console.log('[tool42][background] VK API request', {
            method: message.method,
            params: message.params
        });

        const vkTab = await getVkTab();

        if (!vkTab?.id) {
            throw new Error('VK tab is not available');
        }

        console.log('[tool42][background] Using VK tab', {
            id: vkTab.id,
            url: vkTab.url,
            status: vkTab.status
        });

        await waitForTabComplete(vkTab.id);

        const response = await chrome.tabs.sendMessage(vkTab.id, {
            type: 'tool42-vk-api-call',
            method: message.method,
            params: message.params
        });

        console.log('[tool42][background] VK API response', response);
        sendResponse(response);
    })().catch((error) => {
        console.error('[tool42][background] VK API bridge error', error);
        sendResponse({
            error: {
                error_msg: error instanceof Error ? error.message : String(error)
            }
        });
    });

    return true;
});
