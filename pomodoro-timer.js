// Get references to HTML elements
const timerDisplay = document.getElementById('timer-display');
const startBtn = document.getElementById('start-btn');
const pauseBtn = document.getElementById('pause-btn');
const resetBtn = document.getElementById('reset-btn');
const workTimeInput = document.getElementById('work-time');
const breakTimeInput = document.getElementById('break-time');

let timer;
let isRunning = false;
let seconds = 1500; // Default to 25 minutes
let isWorkPeriod = true;

// Function to format time as mm:ss
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

// Function to update the timer display
function updateDisplay() {
    timerDisplay.textContent = formatTime(seconds);
}

// Function to start the timer
function startTimer() {
    if (isRunning) return;
    isRunning = true;
    startBtn.disabled = true;
    pauseBtn.disabled = false;
    resetBtn.disabled = false;

    timer = setInterval(() => {
        if (seconds <= 0) {
            clearInterval(timer);
            isRunning = false;
            startBtn.disabled = false;
            isWorkPeriod = !isWorkPeriod;
            seconds = isWorkPeriod
                ? parseInt(workTimeInput.value) * 60
                : parseInt(breakTimeInput.value) * 60;
            updateDisplay();
            alert(isWorkPeriod ? "Work time is up!" : "Break time is up!");
        } else {
            seconds--;
            updateDisplay();
        }
    }, 1000);
}

// Function to pause the timer
function pauseTimer() {
    if (!isRunning) return;
    clearInterval(timer);
    isRunning = false;
    startBtn.disabled = false;
    pauseBtn.disabled = true;
}

// Function to reset the timer
function resetTimer() {
    clearInterval(timer);
    isRunning = false;
    seconds = parseInt(workTimeInput.value) * 60;
    updateDisplay();
    startBtn.disabled = false;
    pauseBtn.disabled = true;
    resetBtn.disabled = true;
}

// Event listeners for buttons
startBtn.addEventListener('click', startTimer);
pauseBtn.addEventListener('click', pauseTimer);
resetBtn.addEventListener('click', resetTimer);

// Initial display update
updateDisplay();
