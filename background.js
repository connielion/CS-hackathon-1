chrome.browserAction.onClicked.addListener(function (tab) {
    // Send a message to active tab
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        let activeTab = tabs[0];
        chrome.tabs.sendMessage(activeTab.id, { "message": "clicked_boss_button" });
    });
});

chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        if (request.message === "self_destruct") {
            closeTabs();
        }
    }
)

const closeTabs = () => {
    chrome.tabs.query({}, function (tabs) {
        for (let i = 0; i < tabs.length; i++) {
            chrome.tabs.remove(tabs[i].id);
        }
    });
}