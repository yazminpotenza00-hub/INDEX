document.addEventListener('DOMContentLoaded', () => {
  const panels = document.querySelectorAll('.panel');

  function updateImages() {
    const windowHeight = window.innerHeight;

    panels.forEach(panel => {
      const img = panel.querySelector('.panel-img');
      const rect = panel.getBoundingClientRect();

      let visible = Math.min(Math.max(windowHeight - rect.top, 0), windowHeight);
      let opacity = visible / windowHeight;

      img.style.opacity = opacity;

      // efecto suave hacia arriba
      img.style.transform = `translateY(calc(-50% + ${(1 - opacity) * 50}px))`;
    });
  }

  window.addEventListener('scroll', updateImages);
  window.addEventListener('resize', updateImages);
  updateImages();
});
