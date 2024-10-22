let currentIndex = 0;

function moveCarousel(direction) {
    const items = document.querySelectorAll('.service-item');
    const totalItems = items.length;

    // Calcula el nuevo índice
    currentIndex = (currentIndex + direction + totalItems) % totalItems;

    // Mueve los elementos del carrusel
    const carouselItems = document.querySelector('.carousel-items');
    const itemWidth = items[0].offsetWidth; // ancho de cada item
    carouselItems.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
}
