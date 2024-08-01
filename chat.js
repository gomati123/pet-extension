document.addEventListener('DOMContentLoaded', function() {
    const chatMessages = document.getElementById('chat-messages');
    const userInput = document.getElementById('user-input');
    const sendButton = document.getElementById('send-button');

    function addMessage(sender, text) {
        const messageDiv = document.createElement('div');
        messageDiv.textContent = `${sender}: ${text}`;
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight; // Scroll to the bottom
    }

    function simulatePetResponse(userMessage) {
        // Basic AI response simulation
        let petResponse = "Hmm, I don't understand.";
        if (userMessage.toLowerCase().includes('hello')) {
            petResponse = 'Hello there! How can I assist you today?';
        } else if (userMessage.toLowerCase().includes('play')) {
            petResponse = 'Yay! Let’s play!';
        } else if (userMessage.toLowerCase().includes('feed')) {
            petResponse = 'Yum, thanks for the food!';
        } else if (userMessage.toLowerCase().includes('how are you?')) {
            petResponse = 'thanks buddy for asking ! I am good , nice to see you here, how was ur day today ?';
        } else if (userMessage.toLowerCase().includes('lonely')) {
            petResponse = 'do not worry , I am here for you, do want motivation?';
        }
        return petResponse;
    }

    sendButton.addEventListener('click', function() {
        const userMessage = userInput.value.trim();
        if (userMessage) {
            addMessage('You', userMessage);
            const petResponse = simulatePetResponse(userMessage);
            addMessage('Pet', petResponse);
            userInput.value = ''; // Clear input field
        }
    });

    // Optional: Allow pressing Enter to send a message
    userInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            sendButton.click();
        }
    });
});
