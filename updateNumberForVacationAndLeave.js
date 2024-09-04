// Define the numbers dynamically (you can replace these values with actual dynamic data)
const vacationRequestsCount = 8; // Example value
const leaveRequestsCount = 10; // Example value

// Function to update card data
function updateCardData() {
    // Get card elements
    const vacationRequestsCard = document.getElementById('vacation-requests-count');
    const leaveRequestsCard = document.getElementById('leave-requests-count');

    // Update card data
    vacationRequestsCard.textContent = vacationRequestsCount;
    leaveRequestsCard.textContent = leaveRequestsCount;
}

// Call the function to update card data
updateCardData();
