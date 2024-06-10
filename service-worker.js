
function addPopup() {
    //document.body.style.backgroundColor = 'red';
    alert("hi");

}

chrome.action.onClicked.addListener((tab) => {
    if (!tab.url.includes('chrome://')) {
        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            files: ['./scripts/lib/van-1.5.0.nomodule.min.js', './scripts/borderify.js', './scripts/main.js']
            //function: addPopup
        });
    }
});
