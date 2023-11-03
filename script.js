// Medication Management
const medicationSchedule = document.getElementById("medication-schedule");
// Simulated data
const medications = ["Medication A (8:00 AM)", "Medication B (1:00 PM)"];
medications.forEach(medication => {
    const listItem = document.createElement("li");
    listItem.textContent = medication;
    medicationSchedule.appendChild(listItem);
});

// Emergency Contacts
const contactsList = document.getElementById("contacts-list");
// Simulated data
const emergencyContacts = ["John Doe (123-456-7890)", "Jane Smith (987-654-3210)"];
emergencyContacts.forEach(contact => {
    const listItem = document.createElement("li");
    listItem.textContent = contact;
    contactsList.appendChild(listItem);
});

// SOS Button
const sosButton = document.getElementById("sos-button");
sosButton.addEventListener("click", () => {
    alert("SOS button clicked. Contacting emergency services...");
});

// Video Call Button
const videoCallButton = document.getElementById("video-call-button");
videoCallButton.addEventListener("click", () => {
    alert("Starting a video call with your caregiver...");
});

// Chat Bot Button (simulated)
const chatBotButton = document.getElementById("chatbot-button");
chatBotButton.addEventListener("click", () => {
    alert("Opening chat bot for immediate assistance...");
});
