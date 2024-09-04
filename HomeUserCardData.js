// Define the data for the card
const profileData = {
    name: "Yamen Amjed",
    title: "Java Developer",
    imageSrc: "/images/8N7A5921.JPG",
    reportingTo: "Salwa Assem",
    viewProfileLink: "viewProfile.html"
};

function createProfileCard(data) {
    return `
        <div class="card bg-transparent shadow mb-3 card-custom me-5 mt-4" style="max-width: 100%;">
            <div class="card-body">
                <div class="d-flex align-items-center flex-wrap">
                    <img src="${data.imageSrc}" alt="Profile" class="profile-img rounded-circle" width="30" height="30">
                    <div class="ms-2">
                        <h5 class="card-title">${data.name}</h5>
                        <h6 class="card-subtitle mb-2 text-body-secondary">${data.title}</h6>
                    </div>
                    <a href="${data.viewProfileLink}" class="btn btn-outline-success ms-auto mt-2 mt-md-0">View Profile</a>
                </div>
            </div>
            <div class="card-body">
                <div class="d-flex align-items-center flex-wrap">
                    <i class="bi bi-person bi-5x me-2" style="font-size: 2.5rem;"></i>
                    <div class="ms-1 me-5">
                        <p class="card-title fw-bold">Reporting To:</p>
                        <h6 class="card-subtitle mb-2 text-body-secondary">${data.reportingTo}</h6>
                    </div>
                    <i class="bi bi-star bi-5x ms-3 me-2" style="font-size: 2.5rem;"></i>
                    <div class="ms-1">
                        <p class="card-title fw-bold">Reporting To:</p>
                        <h6 class="card-subtitle mb-2 text-body-secondary">${data.reportingTo}</h6>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function renderProfileCard() {
    const cardContainer = document.getElementById("profile-card-container");
    cardContainer.innerHTML = createProfileCard(profileData);
}

// Call the function on page load to render the profile card
document.addEventListener('DOMContentLoaded', renderProfileCard);

