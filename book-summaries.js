// List of book summaries
const books = [
    {
        title: "The 7 Habits of Highly Effective People",
        summary: "Stephen R. Covey's influential book presents a principle-centered approach to personal and professional effectiveness. Covey identifies seven habits that can transform individuals from being dependent to independent and eventually interdependent, essential for achieving personal and professional success. The first three habits focus on self-mastery: being proactive, beginning with the end in mind, and prioritizing tasks effectively. The next three habits involve working well with others: thinking win-win, seeking first to understand then to be understood, and synergizing to create better solutions. The final habit, sharpening the saw, emphasizes the importance of self-renewal and continuous improvement."
    },
    {
        title: "How to Win Friends and Influence People",
        summary: "Dale Carnegie's classic book provides timeless principles for interpersonal communication and relationship-building. It teaches strategies for making people like you, influencing them to your way of thinking, and handling disagreements in a way that benefits everyone involved. Carnegie emphasizes empathy, respect, and understanding in interactions with others, focusing on techniques such as showing genuine interest in others, avoiding criticism, and giving sincere compliments."
    },
    {
        title: "Atomic Habits",
        summary: "James Clear's book focuses on the power of small habits and how tiny changes can lead to remarkable results. It explores the science behind habit formation and offers practical advice on building good habits and breaking bad ones. Clear’s method emphasizes the importance of incremental improvements and the compounding effect of consistent actions over time. The book provides strategies for habit stacking, designing environments to support positive behavior, and tracking progress to maintain motivation."
    },
    {
        title: "Thinking, Fast and Slow",
        summary: "Daniel Kahneman, a Nobel laureate, delves into the dual systems of thinking: the fast, intuitive, and emotional system, and the slower, more deliberate, and logical system. The book explores how these systems influence our judgments and decisions, highlighting cognitive biases and the ways our thinking can be flawed. Kahneman discusses concepts such as loss aversion, overconfidence, and the impact of heuristics on decision-making, offering insights into how we can improve our thinking processes."
    },
    {
        title: "The Power of Now",
        summary: "Eckhart Tolle's book teaches the importance of living in the present moment and transcending the mind's constant chatter. It explores concepts of consciousness, mindfulness, and spiritual awakening, encouraging readers to let go of past regrets and future anxieties to find peace and fulfillment in the now. Tolle discusses techniques for becoming more aware of the present, such as observing one’s thoughts and emotions without judgment and practicing mindfulness in daily activities."
    },
    {
        title: "Daring Greatly",
        summary: "Brené Brown’s work focuses on the power of vulnerability and its role in fostering creativity, connection, and courage. She challenges the notion of vulnerability as a weakness and instead presents it as a source of strength and a key component of meaningful relationships and personal growth. Brown explores how embracing vulnerability can lead to greater innovation and resilience, and offers strategies for building authentic connections and overcoming fear of judgment."
    },
    {
        title: "Mindset: The New Psychology of Success",
        summary: "Carol S. Dweck introduces the concept of 'fixed' vs. 'growth' mindsets and how they impact our ability to achieve success. She argues that embracing a growth mindset—believing that abilities and intelligence can be developed through effort and learning—leads to greater achievement and resilience. The book provides insights into how our beliefs about our abilities influence our motivation, learning, and overall success, and offers strategies for fostering a growth mindset in various aspects of life."
    },
    {
        title: "Start with Why",
        summary: "Simon Sinek explores the idea that successful leaders and organizations start with a clear sense of 'why'—their purpose or cause. He argues that understanding and communicating the 'why' behind what we do inspires others and drives meaningful action and success. Sinek introduces the Golden Circle model, which emphasizes starting with 'why,' then addressing 'how,' and finally 'what,' to create a powerful and authentic vision that resonates with people."
    },
    {
        title: "Grit: The Power of Passion and Perseverance",
        summary: "Angela Duckworth examines the role of grit—passion and perseverance—in achieving long-term goals. She provides research-backed insights into how grit can be cultivated and how it differs from talent. The book explores the importance of maintaining effort and motivation over time, and offers practical advice for developing resilience and determination in the face of challenges."
    },
    {
        title: "Drive: The Surprising Truth About What Motivates Us",
        summary: "Daniel H. Pink explores the science of motivation and argues that traditional rewards and punishments are not as effective as intrinsic motivators. He presents a framework based on autonomy, mastery, and purpose as key drivers of motivation and explains how they can be applied to enhance personal and professional fulfillment. The book highlights the importance of fostering environments that support these intrinsic motivators to achieve higher levels of engagement and satisfaction."
    }
];

// Initialize variables
let currentIndex = 0;

// Get references to HTML elements
const bookTitleElement = document.getElementById('book-title');
const bookSummaryElement = document.getElementById('book-summary');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');

// Function to update the book summary display
function updateBookSummary() {
    const book = books[currentIndex];
    bookTitleElement.textContent = book.title;
    bookSummaryElement.textContent = book.summary;
}

// Event listeners for navigation buttons
prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateBookSummary();
    }
});

nextButton.addEventListener('click', () => {
    if (currentIndex < books.length - 1) {
        currentIndex++;
        updateBookSummary();
    }
});

// Initial display
updateBookSummary();
