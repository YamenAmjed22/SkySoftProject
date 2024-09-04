// Define the vacation requests data
const vacationRequests = [
    {
        name: "Jane Smith",
        imageSrc: "/images/8N7A5661.JPG",
        submittedOn: "2024-08-29",
        duration: "3 days (29/8/2024 - 1/9/2024)",
        currentlyAt: "Omar Ahmad"
    },
    {
        name: "John Doe",
        imageSrc: "/images/8N7A5661.JPG",
        submittedOn: "2024-09-01",
        duration: "5 days (1/9/2024 - 5/9/2024)",
        currentlyAt: "Salwa Assem"
    },
    // Add more requests as needed
];

function createVacationCard(request) {
    return `
        <div class="col-md-6 col-lg-3 mb-3" data-name="${request.name}">
            <div class="card vacation-card">
                <div class="card-body shadow" style="font-size: 12px;">
                    <div class="align-items-center">
                        <img src="${request.imageSrc}" alt="Profile" class="card-photo rounded-circle">
                        <div class="ms-3">
                            <h5 class="card-title">${request.name}</h5>
                            <p class="mb-1 fw-light">Submitted on:</p>
                            <p class="mb-2 fw-bold">${request.submittedOn}</p>
                            <p class="mb-1 fw-light">Duration:</p>
                            <p class="mb-2 fw-bold">${request.duration}</p>
                            <p class="mb-1">Currently at:</p>
                            <p class="mb-2 fw-bold" style="color: green;">${request.currentlyAt}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function populateVacationRequests() {
    const cardsContainer = document.getElementById("cards-container");
    cardsContainer.innerHTML = vacationRequests.map(createVacationCard).join('');
}

// Initialize the vacation requests on page load
document.addEventListener('DOMContentLoaded', populateVacationRequests);
