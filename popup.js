document.addEventListener('DOMContentLoaded', function() {
    let petImageElement = document.getElementById('pet-image');
    let giveAttentionBtn = document.getElementById('give-attention');
    let playBtn = document.getElementById('play');
    let feedBtn = document.getElementById('feed');
    let dadJokesBtn = document.getElementById('dad-jokes');
    let quotesBtn = document.getElementById('quotes');
    let todoListBtn = document.getElementById('todo-list');
    let pomodoroTimerBtn = document.getElementById('pomodoro-timer');
    let bookSummariesBtn = document.getElementById('book-summaries');
    let webTimeBtn = document.getElementById('web-time');
    let viewRecordsButton = document.getElementById('view-records');
    let chatButton = document.getElementById('chat-with-pet');
    let trackerButton = document.getElementById('tracker');
    let statusElement = document.getElementById('status');
    let happinessLevelElement = document.getElementById('happiness-level');

    let happiness = 62; // Initial happiness level, less than 100
    const happinessDecreaseRate = 2; // Rate at which happiness decreases
    const decreaseInterval = 600000; // Time interval for decreasing happiness (10 minutes in milliseconds)
    const happinessIncreaseRate = 2; // Amount to increase happiness when playing or feeding

    // Function to update pet image based on mood
    function updatePetImage() {
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

    // Function to show temporary image and revert back
    function showTemporaryImage(tempSrc, callback) {
        const originalSrc = petImageElement.src;
        petImageElement.src = tempSrc;
        setTimeout(() => {
            petImageElement.src = originalSrc;
            if (callback) callback();
        }, 3000); // 3 seconds
    }

    // Function to give attention to the pet
    function giveAttention() {
        happiness = Math.min(100, happiness + happinessIncreaseRate); // Increase happiness but not above 100
        updatePetImage();
        updatePetStatus(happiness);
    }

    // Function to play with the pet
    function play() {
        happiness = Math.min(100, happiness + happinessIncreaseRate); // Increase happiness but not above 100
        showTemporaryImage('assets/images/pet/playing.png', updatePetImage); // Show playing image
        updatePetStatus(happiness);
    }

    // Function to feed the pet
    function feed() {
        happiness = Math.min(100, happiness + happinessIncreaseRate); // Increase happiness but not above 100
        showTemporaryImage('assets/images/pet/eating.png', updatePetImage); // Show eating image
        updatePetStatus(happiness);
    }

    // Function to decrease happiness over time
    function decreaseHappiness() {
        happiness -= happinessDecreaseRate;
        if (happiness < 0) happiness = 0; // Ensure happiness doesn't go below 0
        updatePetImage();
        updatePetStatus(happiness);
    }

    // Function to update pet status
    function updatePetStatus(level) {
        happinessLevelElement.textContent = level;
    }

    // Event listeners for buttons
    if (giveAttentionBtn) {
        giveAttentionBtn.addEventListener('click', giveAttention);
    }

    if (playBtn) {
        playBtn.addEventListener('click', play);
    }

    if (feedBtn) {
        feedBtn.addEventListener('click', feed);
    }

    if (dadJokesBtn) {
        dadJokesBtn.addEventListener('click', () => {
            chrome.windows.create({ url: 'features/dad-jokes.html', type: 'popup', width: 400, height: 500 });
        });
    }

    if (quotesBtn) {
        quotesBtn.addEventListener('click', () => {
            chrome.windows.create({ url: 'features/motivational-quotes.html', type: 'popup', width: 400, height: 500 });
        });
    }

    if (todoListBtn) {
        todoListBtn.addEventListener('click', () => {
            chrome.windows.create({ url: 'features/todolist.html', type: 'popup', width: 400, height: 500 });
        });
    }

    if (pomodoroTimerBtn) {
        pomodoroTimerBtn.addEventListener('click', () => {
            chrome.windows.create({ url: 'features/pomodoro-timer.html', type: 'popup', width: 400, height: 500 });
        });
    }

    if (bookSummariesBtn) {
        bookSummariesBtn.addEventListener('click', () => {
            chrome.windows.create({ url: 'features/book-summaries.html', type: 'popup', width: 400, height: 500 });
        });
    }

    if (webTimeBtn) {
        webTimeBtn.addEventListener('click', () => {
            chrome.windows.create({ url: 'features/dashboard.html', type: 'popup', width: 800, height: 600 });
        });
    }

    if (viewRecordsButton) {
        viewRecordsButton.addEventListener('click', () => {
            chrome.windows.create({
                url: 'html/timer-records.html',
                type: 'popup',
                width: 400,
                height: 500
            });
        });
    }

    if (chatButton) {
        chatButton.addEventListener('click', function() {
            window.open('chat.html', 'ChatWithPet', 'width=400,height=600');
        });
    }

    if (trackerButton) {
        trackerButton.addEventListener('click', function() {
            window.open('tracker.html', 'tracker', 'width=600,height=400');
        });
    }

    // Start decreasing happiness over time
    setInterval(decreaseHappiness, decreaseInterval);

    // Initial update to show correct image and status
    updatePetImage();
    updatePetStatus(happiness);
});
