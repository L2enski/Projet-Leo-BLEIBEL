// script.js
const carousel = document.querySelector('.carousel');
const dots = document.querySelectorAll('.dot');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const totalSlides = dots.length;
let currentIndex = 0;

// Fonction pour mettre à jour la position du carrousel
function updateCarousel(index) {
    carousel.style.transform = `translateX(-${index * 100}vw)`;
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
}

// Bouton "Précédent"
prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? totalSlides - 1 : currentIndex - 1;
    updateCarousel(currentIndex);
});

// Bouton "Suivant"
nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex === totalSlides - 1) ? 0 : currentIndex + 1;
    updateCarousel(currentIndex);
});

// Clic sur un point indicateur
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentIndex = index;
        updateCarousel(currentIndex);
    });
});
