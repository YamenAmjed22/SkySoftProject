// Define news data
const newsData = [
    {
        image: '/images/news.jpg',
        title: 'First News',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati, accusamus.'
    },
    {
        image: '/images/news2.jpg',
        title: 'Second News',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, laudantium.'
    },
    {
        image: '/images/news3.jpg',
        title: 'Last News',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque, nam.',
        descriptionStyle: 'font-weight: 700;' // Optional: Custom style for specific slide
    }
    // Add more news objects as needed
];

function createCarouselIndicators(newsItems) {
    return newsItems.map((_, index) => `
        <button type="button" data-bs-target="#newsCarousel" data-bs-slide-to="${index}" ${index === 0 ? 'class="active" aria-current="true"' : ''} aria-label="Slide ${index + 1}"></button>
    `).join('');
}

function createCarouselItems(newsItems) {
    return newsItems.map((news, index) => `
        <div class="carousel-item ${index === 0 ? 'active' : ''}">
            <img src="${news.image}" alt="${news.title}" width="100%" height="300px">
            <div class="carousel-caption d-none d-md-block">
                <h5>${news.title}</h5>
                <p style="${news.descriptionStyle || ''}">${news.description}</p>
            </div>
        </div>
    `).join('');
}

function initCarousel() {
    const indicatorsContainer = document.querySelector('.carousel-indicators');
    const innerContainer = document.querySelector('.carousel-inner');

    indicatorsContainer.innerHTML = createCarouselIndicators(newsData);
    innerContainer.innerHTML = createCarouselItems(newsData);
}

// Initialize carousel on page load
document.addEventListener('DOMContentLoaded', initCarousel);
