// Array of motivational quotes
const quotes = [
    "Believe in yourself and all that you are.",
    "The only way to do great work is to love what you do.",
    "You are never too old to set another goal or to dream a new dream.",
    "Success is not the key to happiness. Happiness is the key to success.",
    "The best way to predict your future is to create it.",
    "Your time is limited, don't waste it living someone else's life.",
    "Act as if what you do makes a difference. It does.",
    "Success usually comes to those who are too busy to be looking for it.",
    "Don't watch the clock; do what it does. Keep going.",
    "The harder you work for something, the greater you'll feel when you achieve it.",
    "Dream it. Believe it. Build it.",
    "Don’t be pushed around by the fears in your mind. Be led by the dreams in your heart.",
    "The only limit to our realization of tomorrow is our doubts of today.",
    "You are never too old to set another goal or to dream a new dream.",
    "Do what you can, with what you have, where you are.",
    "It does not matter how slowly you go as long as you do not stop.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "Hardships often prepare ordinary people for an extraordinary destiny.",
    "Believe you can and you're halfway there.",
    "Start where you are. Use what you have. Do what you can."
];

// Get reference to HTML elements
let quoteTextElement = document.getElementById('quote-text');
let getQuoteBtn = document.getElementById('get-quote');

// Function to get a random quote
function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

// Function to display a random quote
function displayQuote() {
    const quote = getRandomQuote();
    quoteTextElement.textContent = quote;
}

// Event listener for the button
getQuoteBtn.addEventListener('click', displayQuote);
