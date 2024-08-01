// timer-label.js

let timerInterval;
let startTime;
let elapsedTime = 0;
let isTimerRunning = false;

const timerDisplay = document.getElementById('timer-display');
const startButton = document.getElementById('start-timer');
const stopButton = document.getElementById('stop-timer');
const viewRecordsButton = document.getElementById('view-records');
const recordsContainer = document.getElementById('records-container');
const recordsList = document.getElementById('records-list');

function formatTime(ms) {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function startTimer() {
    if (isTimerRunning) return;
    isTimerRunning = true;
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(() => {
        elapsedTime = Date.now() - startTime;
        timerDisplay.textContent = formatTime(elapsedTime);
    }, 1000);
}

function stopTimer() {
    if (!isTimerRunning) return;
    isTimerRunning = false;
    clearInterval(timerInterval);
    const timeSpent = formatTime(elapsedTime);

    // Save time record
    chrome.storage.local.get('timerRecords', (data) => {
        const records = data.timerRecords || [];
        const url = (new URL(window.location.href)).hostname;
        records.push({ url, time: timeSpent });
        chrome.storage.local.set({ timerRecords: records });

        // Check for excessive time
        checkExcessiveTime(url, timeSpent);

        // Alert with sound
        new Audio(chrome.runtime.getURL('sounds/alert.mp3')).play();

        // Update records list
        updateRecordsList();
    });
}

function checkExcessiveTime(url, timeSpent) {
    // Example: If more than 1 hour spent on any site, alert user
    if (elapsedTime > 3600000) { // 1 hour
        alert(`You have spent ${formatTime(elapsedTime)} on ${url}.`);
    }
}

function updateRecordsList() {
    chrome.storage.local.get('timerRecords', (data) => {
        const records = data.timerRecords || [];
        recordsList.innerHTML = records.map(record => `<li>${record.url}: ${record.time}</li>`).join('');
    });
}

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
viewRecordsButton.addEventListener('click', () => {
    recordsContainer.classList.toggle('hidden');
});

// Drag functionality
let timerLabel = document.getElementById('timer-label');
let isDragging = false;
let offsetX, offsetY;

timerLabel.addEventListener('mousedown', (e) => {
    isDragging = true;
    offsetX = e.clientX - timerLabel.getBoundingClientRect().left;
    offsetY = e.clientY - timerLabel.getBoundingClientRect().top;
});

document.addEventListener('mousemove', (e) => {
    if (isDragging) {
        timerLabel.style.left = `${e.clientX - offsetX}px`;
        timerLabel.style.top = `${e.clientY - offsetY}px`;
    }
});

document.addEventListener('mouseup', () => {
    isDragging = false;
});
