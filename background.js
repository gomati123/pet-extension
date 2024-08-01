chrome.runtime.onInstalled.addListener(() => {
    console.log('Virtual Pet Extension installed.');
});

// Listen for tab switch
chrome.webNavigation.onCommitted.addListener((details) => {
    chrome.runtime.sendMessage({ action: 'tabSwitched' });
});
// background.js
let timerRecords = [];

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === 'complete') {
        // Handle time tracking when tabs are loaded
    }
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'saveRecord') {
        timerRecords.push(request.record);
        chrome.storage.local.set({ timerRecords });
    }
});

function checkTimeAlert() {
    // Check if time spent exceeds a limit and alert user
}
