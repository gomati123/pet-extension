// timer.js

let timerStartTime;
let elapsedTime = 0;
let isTimerRunning = false;

function startTimer() {
    if (isTimerRunning) return;
    timerStartTime = Date.now() - elapsedTime;
    isTimerRunning = true;
    updateTimer();
}

function stopTimer() {
    if (!isTimerRunning) return;
    elapsedTime = Date.now() - timerStartTime;
    isTimerRunning = false;
    clearInterval(timerInterval);
}

function resetTimer() {
    elapsedTime = 0;
    updateTimer();
}

function updateTimer() {
    if (isTimerRunning) {
        timerInterval = setInterval(() => {
            const currentTime = Date.now();
            const timeElapsed = currentTime - timerStartTime;
            document.getElementById('timer-display').textContent = formatTime(timeElapsed);
        }, 1000);
    }
}

function formatTime(ms) {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

// Example usage: Start the timer on page load
startTimer();
