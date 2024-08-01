// Get references to HTML elements
let petImageElement = document.getElementById('pet-image');
let giveAttentionBtn = document.getElementById('give-attention');
let playBtn = document.getElementById('play');
let feedBtn = document.getElementById('feed');
let dadJokesBtn = document.getElementById('dad-jokes');
let quotesBtn = document.getElementById('quotes');
let todoListBtn = document.getElementById('todo-list');
let pomodoroTimerBtn = document.getElementById('pomodoro-timer');
let bookSummariesBtn = document.getElementById('book-summaries');
let statusElement = document.getElementById('status');
let happinessLevelElement = document.getElementById('happiness-level');

const happinessDecreaseRate = 2; // Amount to decrease happiness per interval
const decreaseInterval = 600000; // Time interval for decreasing happiness (10 minutes in milliseconds)
const happinessIncreaseRate = 2; // Amount to increase happiness when playing or feeding

// Function to update pet image based on mood
function updatePetImage(happiness) {
    if (happiness > 66) {
        petImageElement.src = 'assets/images/pet/happy.png';
        statusElement.textContent = 'Pet is happy';
    } else if (happiness > 33) {
        petImageElement.src = 'assets/images/pet/neutral.png';
        statusElement.textContent = 'Pet is neutral';
    } else {
        petImageElement.src = 'assets/images/pet/sad.png';
        statusElement.textContent = 'Pet is sad';
    }
}

// Function to update pet status and save to storage
function updatePetStatus(happiness) {
    happinessLevelElement.textContent = happiness;
    chrome.storage.local.set({ petHappiness: happiness });
}

// Function to give attention to the pet
function giveAttention() {
    chrome.storage.local.get('petHappiness', (data) => {
        let happiness = data.petHappiness || 62;
        happiness = Math.min(100, happiness + happinessIncreaseRate); // Increase happiness but not above 100
        updatePetImage(happiness);
        updatePetStatus(happiness);
    });
}

// Function to play with the pet
function play() {
    chrome.storage.local.get('petHappiness', (data) => {
        let happiness = data.petHappiness || 62;
        happiness = Math.min(100, happiness + happinessIncreaseRate); // Increase happiness but not above 100
        updatePetImage(happiness);
        updatePetStatus(happiness);
    });
}

// Function to feed the pet
function feed() {
    chrome.storage.local.get('petHappiness', (data) => {
        let happiness = data.petHappiness || 62;
        happiness = Math.min(100, happiness + happinessIncreaseRate); // Increase happiness but not above 100
        updatePetImage(happiness);
        updatePetStatus(happiness);
    });
}

// Function to decrease happiness over time
function decreaseHappiness() {
    chrome.storage.local.get('petHappiness', (data) => {
        let happiness = data.petHappiness || 62;
        happiness -= happinessDecreaseRate;
        if (happiness < 0) happiness = 0; // Ensure happiness doesn't go below 0
        updatePetImage(happiness);
        updatePetStatus(happiness);
    });
}

// Event listeners for buttons
giveAttentionBtn.addEventListener('click', giveAttention);
playBtn.addEventListener('click', play);
feedBtn.addEventListener('click', feed);
dadJokesBtn.addEventListener('click', () => {
    chrome.windows.create({ url: 'features/dad-jokes.html', type: 'popup', width: 400, height: 500 });
});
quotesBtn.addEventListener('click', () => {
    chrome.windows.create({ url: 'features/motivational-quotes.html', type: 'popup', width: 400, height: 500 });
});
todoListBtn.addEventListener('click', () => {
    chrome.windows.create({ url: 'features/todolist.html', type: 'popup', width: 400, height: 500 });
});
pomodoroTimerBtn.addEventListener('click', () => {
    chrome.windows.create({ url: 'features/pomodoro-timer.html', type: 'popup', width: 400, height: 500 });
});
bookSummariesBtn.addEventListener('click', () => {
    chrome.windows.create({ url: 'features/book-summaries.html', type: 'popup', width: 800, height: 600 });
});

// Retrieve and set initial happiness level
chrome.storage.local.get('petHappiness', (data) => {
    let happiness = data.petHappiness || 50; // Default to 50 if no data is found
    updatePetImage(happiness);
    updatePetStatus(happiness);
});

// Start decreasing happiness over time
setInterval(decreaseHappiness, decreaseInterval);
