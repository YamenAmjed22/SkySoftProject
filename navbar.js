document.addEventListener("DOMContentLoaded", function() {
    fetch('navbar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar-container').innerHTML = data;
            highlightCurrentPage();
        })
        .catch(error => console.error('Error loading navbar:', error));
});

function highlightCurrentPage() {
    // Get the current URL path
    const currentPath = window.location.pathname;

    // Remove leading '/' from path for comparison
    const path = currentPath === '/' ? 'index.html' : currentPath.replace(/^\//, '');

    // Get all navigation links
    const links = document.querySelectorAll('.navbar-nav .nav-link');

    // Loop through each link
    links.forEach(link => {
        // Check if the link's href matches the current URL path
        if (link.getAttribute('href') === path) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}
