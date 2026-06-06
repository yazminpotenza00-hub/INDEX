document.addEventListener('DOMContentLoaded', () => {

  /* =============== PANEL FADE / PARALLAX =============== */
  const panels = document.querySelectorAll('.panel-img');

  function fadePanels() {
    panels.forEach(img => {
      const rect = img.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      const opacity = 1 - (rect / windowHeight);
      img.style.opacity = Math.max(0, Math.min(1, opacity));
      img.style.transform = `translateY(${(1 - opacity) * 40}px)`;
    });
  }

  window.addEventListener('scroll', fadePanels);
  fadePanels();

  /* =============== MENÚ LATERAL =============== */
  const menuBtn = document.querySelector('.menu-icon');
  const closeBtn = document.querySelector('.close-menu');
  const sideMenu = document.querySelector('.side-menu');
  const overlay = document.querySelector('.overlay');

  function openMenu() {
    sideMenu.classList.add('open');
    overlay.style.display = 'block';
  }

  function closeMenuFunc() {
    sideMenu.classList.remove('open');
    overlay.style.display = 'none';
  }

  menuBtn.addEventListener('click', openMenu);
  closeBtn.addEventListener('click', closeMenuFunc);
  overlay.addEventListener('click', closeMenuFunc);

});

document.addEventListener('DOMContentLoaded', () => {
  const menuWrapper = document.querySelector('.menu-wrapper');
  const dropdownMenu = document.querySelector('.dropdown-menu-premium');
  const menuIcon = document.querySelector('.menu-icon-premium');

  let menuOpen = false;
  let hoverTimeout;

  // FUNCION PARA ABRIR EL MENÚ
  function openMenu() {
    clearTimeout(hoverTimeout);
    dropdownMenu.style.opacity = '1';
    dropdownMenu.style.pointerEvents = 'auto';
    dropdownMenu.style.transform = 'translateY(3px)';
    menuOpen = true;
  }

  // FUNCION PARA CERRAR EL MENÚ
  function closeMenu() {
    dropdownMenu.style.opacity = '0';
    dropdownMenu.style.pointerEvents = 'none';
    dropdownMenu.style.transform = 'translateY(-10px)';
    menuOpen = false;
  }

  // ABRIR AL PASAR EL CURSOR SOBRE EL ICONO
  menuIcon.addEventListener('mouseenter', openMenu);

  // MANTENER ABIERTO AL PASAR CURSOR SOBRE EL MENÚ
  dropdownMenu.addEventListener('mouseenter', openMenu);

  // CERRAR EL MENÚ CUANDO SE SALE DEL ICONO Y DEL MENÚ
  menuWrapper.addEventListener('mouseleave', () => {
    hoverTimeout = setTimeout(closeMenu, 300); // retraso suave de 0.3s
  });

  // CERRAR MENÚ SI HACE CLICK FUERA
  document.addEventListener('click', (e) => {
    if (!menuWrapper.contains(e.target)) {
      closeMenu();
    }
  });
});
