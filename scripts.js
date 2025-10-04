// Fullscreen button for carousel
document.getElementById("fullscreen").addEventListener("click", () => {
  const elem = document.getElementById("carouselPresentacion");
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) {
    elem.webkitRequestFullscreen();
  }
});
