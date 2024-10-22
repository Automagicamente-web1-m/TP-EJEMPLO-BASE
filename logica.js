let currentIndex = 0;

function moveCarousel(direction) {
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;

    // Actualiza el índice actual
    currentIndex = (currentIndex + direction + totalItems) % totalItems;

    // Mueve los elementos del carrusel
    const carouselInner = document.querySelector('.carousel-inner');
    carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
}
