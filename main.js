// runs on current tab
chrome.runtime.onInstalled.addListener(function () {
    chrome.storage.sync.set({ color: '#3aa757' }, function () {
        console.log("The color is green.");
    });
});
// click event chrome extension button
chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        if (request.message === 'clicked_boss_button') {
            chrome.runtime.sendMessage({ 'message': 'self_destruct' });
        }
    }
)