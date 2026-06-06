document.addEventListener('DOMContentLoaded', () => {
  const panels = document.querySelectorAll('.panel');

  function updateImages() {
    const windowHeight = window.innerHeight;

    panels.forEach((panel, i) => {
      const img = panel.querySelector('.panel-img');
      const rect = panel.getBoundingClientRect();

      // Calcula cuánta parte del panel está visible
      let visible = Math.min(Math.max(windowHeight - rect.top, 0), windowHeight);
      let opacity = visible / windowHeight; // 0 a 1

      // Aplica opacidad proporcional
      img.style.opacity = opacity;

      // Opcional: efecto de “subida” ligera con scroll
      img.style.transform = `translateX(-50%) translateY(${(1 - opacity) * 50}px)`;
    });
  }

  window.addEventListener('scroll', updateImages);
  window.addEventListener('resize', updateImages);
  updateImages(); // Inicializa al cargar
});
