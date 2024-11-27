const carousel = document.querySelector('.carousel');
const nextButton = document.querySelector('.nav-button.next');
const prevButton = document.querySelector('.nav-button.prev');

let currentSlide = 0;
const totalSlides = document.querySelectorAll('.carousel img').length;

function updateCarousel() {
    const slideWidth = document.querySelector('.carousel img').clientWidth;
    carousel.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
}

nextButton.addEventListener('click', () => {
    if (currentSlide < totalSlides - 1) {
        currentSlide++;
        updateCarousel();
    }
});

prevButton.addEventListener('click', () => {
    if (currentSlide > 0) {
        currentSlide--;
        updateCarousel();
    }
});

window.addEventListener('resize', updateCarousel);

const returnButton = document.querySelector('.nav-button.return');

returnButton.addEventListener('click', () => {
    window.location.href = "index.html"; // Remplace "index.html" par la page de destination
});
