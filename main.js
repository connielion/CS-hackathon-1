// runs on current tab
//console.log(chrome)

chrome.runtime.onInstalled.addListener(function () {
    chrome.storage.sync.set({ color: '#3aa757' }, function () {
        console.log("The color is green.");
    });
});
// click event chrome extension button
chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        if (request.message === "clicked_browser_action") {
            var firstHref = $("a[href^='http']").eq(0).attr("href");

            console.log(firstHref);

            // This line is new!
            chrome.runtime.sendMessage({ "message": "open_new_tab", "url": firstHref });
        }
    }
);

const input = document.getElementById('searchInput');
let inputval = input.value;
console.log(inputval)
function logInput(e) {
    e.preventDefault();

    console.log(inputval);
}

const submitBtn = document.getElementById('submitBtn');
submitBtn.addEventListener('click', logInput())
/*
function get(){

}

const submitBtn = document.getElementById('submitBtn');

submitBtn.addEventListener('click', get())

let source = changeSrc()
const iframeTag = document.getElementsById('iframe');
iframeTag.setAttribute('src', source);
*/

