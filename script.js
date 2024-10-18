function toggleAvailability(mentorId) {
    const availabilityDiv = document.getElementById(`availability-${mentorId}`);
    availabilityDiv.style.display = (availabilityDiv.style.display === 'block') ? 'none' : 'block';
}

function bookSlot(mentorId, time) {
    alert(`You have booked a session with ${mentorId} at ${time}.`);
    // Here you can add logic to mark the slot as booked
}

function sendMessage() {
    const message = document.getElementById('chatInput').value;
    if (message) {
        const chatOutput = document.getElementById('chatOutput');
        chatOutput.innerHTML += `<p>${message}</p>`;
        document.getElementById('chatInput').value = ''; // Clear input
    } else {
        alert('Please type a message before sending.');
    }
}
