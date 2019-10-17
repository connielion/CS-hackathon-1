
// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function (tab) {
    // Send a message to the active tab
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        var activeTab = tabs[0];
        chrome.tabs.sendMessage(activeTab.id, { "message": "clicked_browser_action" });
    });
});

// This block is new!
chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        if (request.message === "open_new_tab") {
            //chrome.tabs.create({"url": request.url});
            closeTabs();
            //saveTabs();
        }
    }
);

const saveTabs = () => {
    chrome.tabs.query({}, function (tabs) {
        for (let i = 0; i < tabs.length; i++) {
            console.log(tabs[i].id);
        }
    });
}

const closeTabs = () => {
    chrome.tabs.query({}, function (tabs) {
        for (var i = 0; i < tabs.length; i++) {
            chrome.tabs.remove(tabs[i].id);
        }
    });
}
