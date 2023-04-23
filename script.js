const carruselContainer = document.querySelector('.carrusel-container');
const carruselInner = carruselContainer.querySelector('.carrusel-inner');
const carruselSlides = carruselContainer.querySelector('.carrusel-slides');
const carruselPrevBtn = carruselContainer.querySelector('.carrusel-btn-prev');
const carruselNextBtn = carruselContainer.querySelector('.carrusel-btn-next');
const slideWidth = carruselInner.clientWidth; // Ancho de cada slide
let slideIndex = 0; // Índice del slide actual

// Función para desplazar el carrusel a la izquierda
const slideToLeft = () => {
if (slideIndex > 0) {
slideIndex--;
carruselSlides.style.transform = `translateX(-${slideWidth * slideIndex}px)`;
}
};

// Función para desplazar el carrusel a la derecha
const slideToRight = () => {
if (slideIndex < carruselSlides.children.length - 1) {
slideIndex++;
carruselSlides.style.transform = `translateX(-${slideWidth * slideIndex}px)`;
}
};

// Agregar eventos de click a los botones de navegación
carruselPrevBtn.addEventListener('click', slideToLeft);
carruselNextBtn.addEventListener('click', slideToRight);

// Agregar evento de click a cada slide para desplazar el carrusel
Array.from(carruselSlides.children).forEach(slide => {
slide.addEventListener('click', () => {
const slideIndexClicked = Array.from(carruselSlides.children).indexOf(slide);
if (slideIndexClicked > slideIndex) {
slideIndex = slideIndexClicked;
slideToRight();
} else if (slideIndexClicked < slideIndex) {
slideIndex = slideIndexClicked;
slideToLeft();
}
});
});