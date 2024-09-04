// Define the profile data
const profileData = {
    name: "Yamen Amjed",
    jobTitle: "Java Developer",
    subtitle: "Junior Developer",
    profileImage: "/images/8N7A5921.JPG",
    reportingTo: "Salwa Assem",
    corporateLevel: "Level 10",
    lifetime: "2.5 Years",
    vacationDaysLeft: "10 Days",
    sickDaysLeft: "15 Days"
};

function populateProfileCard(data) {
    // Populate the profile section
    document.querySelector(".profile-name").textContent = data.name;
    document.querySelector(".profile-job-title").textContent = data.jobTitle;
    document.querySelector(".profile-subtitle").textContent = data.subtitle;
    document.querySelector(".profile-image").src = data.profileImage;

    // Populate the reporting, corporate level, lifetime, vacation, and sick days sections
    document.querySelector(".reporting-to").textContent = data.reportingTo;
    document.querySelector(".corporate-level").textContent = data.corporateLevel;
    document.querySelector(".lifetime").textContent = data.lifetime;
    document.querySelector(".vacation-days-left").textContent = data.vacationDaysLeft;
    document.querySelector(".sick-days-left").textContent = data.sickDaysLeft;
}

// Initialize profile card on page load
document.addEventListener('DOMContentLoaded', function() {
    populateProfileCard(profileData);
});
