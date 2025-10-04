// Fullscreen button for carousel
document.getElementById("fullscreen").addEventListener("click", () => {
  const elem = document.getElementById("carouselPresentacion");
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) {
    elem.webkitRequestFullscreen();
  }
});

const carousel = document.getElementById('carouselPresentacion');
const prevBtn = carousel.querySelector('.carousel-control-prev');
const nextBtn = carousel.querySelector('.carousel-control-next');

function updateControls() {
  const activeIndex = Array.from(carousel.querySelectorAll('.carousel-item')).findIndex(item => item.classList.contains('active'));
  const total = carousel.querySelectorAll('.carousel-item').length;

  prevBtn.style.display = activeIndex === 0 ? 'none' : 'flex'; // Oculta en primer slide
  nextBtn.style.display = activeIndex === total - 1 ? 'none' : 'flex'; // Opcional: oculta en último
}

// Actualizar controles al iniciar
updateControls();

// Escucha cambios de slide
carousel.addEventListener('slid.bs.carousel', updateControls);



const progress = document.getElementById('slideProgress');

function updateProgress() {
  const activeIndex = Array.from(carousel.querySelectorAll('.carousel-item')).findIndex(item => item.classList.contains('active'));
  const total = carousel.querySelectorAll('.carousel-item').length;
  progress.textContent = `Diapositiva ${activeIndex + 1} de ${total}`;
}

carousel.addEventListener('slid.bs.carousel', updateProgress);
updateProgress();
