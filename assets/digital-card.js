document.getElementById("year").textContent = new Date().getFullYear();

const heroVideo = document.querySelector(".hero-video");
if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  heroVideo?.pause();
}
