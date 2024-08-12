document.addEventListener('DOMContentLoaded', () => {
    const chatbox = document.getElementById('chatbox');
    const userInput = document.getElementById('userInput');
    const sendButton = document.getElementById('sendButton');

    function addMessage(text, sender) {
        const message = document.createElement('div');
        message.className = `message ${sender}`;
        message.textContent = text;
        chatbox.appendChild(message);
        chatbox.scrollTop = chatbox.scrollHeight; // Scroll to the bottom
    }

    function handleUserInput() {
        const input = userInput.value.trim();
        if (input === '') {
            alert('Please type your symptoms');
            return;
        }

        addMessage(input, 'user');
        userInput.value = '';

        let botResponse = '';

        if (input.toLowerCase().includes('high body temperature') && input.toLowerCase().includes('cold')) {
            botResponse = "It sounds like you might have a fever. If you experience other symptoms, please consult a healthcare provider.";
        } else if (input.toLowerCase().includes('headache') && input.toLowerCase().includes('nausea')) {
            botResponse = "These symptoms could indicate a migraine. Rest in a dark, quiet room and drink plenty of water.";
        } else if (input.toLowerCase().includes('cough') && input.toLowerCase().includes('sore throat')) {
            botResponse = "These symptoms could be a sign of a common cold or flu. Stay hydrated and get plenty of rest.";
        } else if (input.toLowerCase().includes('shortness of breath')) {
            botResponse = "Shortness of breath can be serious. Please seek medical attention immediately.";
        } else if (input.toLowerCase() === 'hi' || input.toLowerCase() === 'hello') {
            botResponse = "Hello! I'm Medibot. How can I assist you today?";
        } else if (input.toLowerCase() === 'goodbye' || input.toLowerCase() === 'bye') {
            botResponse = "Goodbye! Take care!";
        } else {
            botResponse = "I'm sorry, I didn't understand your symptoms. Please try describing them differently or consult a healthcare provider.";
        }

        setTimeout(() => {
            addMessage(botResponse, 'bot');
        }, 500); // Simulate a delay for bot response
    }

    sendButton.addEventListener('click', handleUserInput);
    userInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            handleUserInput();
        }
    });
});
