// JavaScript for time tracking and smart timer control

let timeSpent = 0;
let timerInterval;

function startTimer() {
    timerInterval = setInterval(() => {
        timeSpent += 1000; // Increase by 1 second
        chrome.storage.local.set({ timeSpent });
    }, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
    chrome.storage.local.set({ timeSpent });
}

// Handle tab switching
chrome.tabs.onActivated.addListener(() => {
    stopTimer();
    startTimer();
});

// Handle tab closing
chrome.tabs.onRemoved.addListener(() => {
    stopTimer();
});

// Handle tab loading
chrome.webNavigation.onCommitted.addListener(() => {
    stopTimer();
    startTimer();
});

// Initialize timer on page load
startTimer();
