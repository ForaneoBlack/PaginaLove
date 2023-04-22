
/*const carruselSlides = document.querySelector('.carrusel-slides');
        const carruselButtons = document.querySelectorAll('.carrusel-button');

        let slideActual = 0;

        // Función para cambiar el slide
        function cambiarSlide(n) {
            slideActual += n;
            if (slideActual < 0) {
              slideActual = carruselSlides.children.length - 1;
            } else if (slideActual >= carruselSlides.children.length) {
                slideActual = 0;
            }
    
            carruselSlides.style.transform = `translateX(-${slideActual * 100}%)`;
        }
    
        // Event listeners para los botones del carrusel
        carruselButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                if (e.target.classList.contains('carrusel-button')) {
                    const direccion = e.target.classList.contains('carrusel-button') ? -1 : 1;
                    cambiarSlide(direccion);
                }
            });
        });*/


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