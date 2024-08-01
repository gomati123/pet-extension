document.addEventListener('DOMContentLoaded', function() {
    const jokeTextElement = document.getElementById('joke-text');
    const getJokeButton = document.getElementById('get-joke');

    // Array of unique jokes
    const jokes = [
        "I'm reading a book about anti-gravity. It's impossible to put down!",
        "Did you hear about the mathematician who’s afraid of negative numbers? He'll stop at nothing to avoid them.",
        "Why don’t skeletons fight each other? They don’t have the guts.",
        "Why did the scarecrow win an award? Because he was outstanding in his field.",
        "Why don’t scientists trust atoms? Because they make up everything!",
        "What does a nosey pepper do? Gets jalapeño business!",
        "Why did the coffee file a police report? It got mugged.",
        "How does a penguin build its house? Igloos it together.",
        "Why don’t programmers like nature? It has too many bugs.",
        "What do you call fake spaghetti? An impasta!",
        "Why do cows have hooves instead of feet? Because they lactose.",
        "What do you call cheese that isn't yours? Nacho cheese.",
        "Why did the math book look sad? Because it had too many problems.",
        "What do you call a factory that makes good products? A satisfactory.",
        "Why did the golfer bring two pairs of pants? In case he got a hole in one.",
        "What do you call a can opener that doesn’t work? A can’t opener.",
        "Why don’t some couples go to the gym? Because some relationships don’t work out.",
        "What do you call an alligator in a vest? An investigator.",
        "Why did the bicycle fall over? It was two-tired.",
        "How does a snowman get around? By riding an ‘icicle’.",
        "Why did the tomato turn red? Because it saw the salad dressing.",
        "What kind of shoes do ninjas wear? Sneakers.",
        "Why did the stadium get hot after the game? All of the fans left.",
        "How does a scientist freshen her breath? With experi-mints.",
        "What do you call a pile of cats? A meow-tain.",
        "Why was the computer cold? It left its Windows open."
    ];

    // Function to get a random joke from the array
    function getRandomJoke() {
        const randomIndex = Math.floor(Math.random() * jokes.length);
        return jokes[randomIndex];
    }

    // Event listener for the button to get a joke
    getJokeButton.addEventListener('click', () => {
        jokeTextElement.textContent = getRandomJoke();
    });
});
