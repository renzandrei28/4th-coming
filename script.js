function submitFeedback() {
    let feedback = document.getElementById('feedbackBox').value;
    if (feedback) {
        alert('Thank you for your feedback! ❤️');
        saveToLocalStorage('feedback', feedback);
        sendEmail('Feedback', feedback);
        document.getElementById('feedbackBox').value = '';
    } else {
        alert('Please enter some feedback.');
    }
}

function submitSuggestion() {
    let suggestion = document.getElementById('suggestionBox').value;
    if (suggestion) {
        alert('Thank you for your suggestion! ❤️');
        saveToLocalStorage('suggestion', suggestion);
        sendEmail('Suggestion', suggestion);
        document.getElementById('suggestionBox').value = '';
    } else {
        alert('Please enter some suggestion.');
    }
}

function saveToLocalStorage(key, value) {
    let storedItems = localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : [];
    storedItems.push(value);
    localStorage.setItem(key, JSON.stringify(storedItems));
}

function viewFeedback() {
    window.location.href = 'feedback.html';
}

function viewSuggestions() {
    window.location.href = 'suggestions.html';
}

function sendEmail(type, message) {
    // You'll need a server-side script to send emails, for now just logging the message
    console.log(`Sending email: ${type}: ${message}`);
}
