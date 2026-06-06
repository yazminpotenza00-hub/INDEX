// =========================
// MENÚ HAMBURGUESA PREMIUM
// =========================

const menuWrapper = document.querySelector('.menu-wrapper');
const menuIcon = document.querySelector('.menu-icon-premium');
const dropdownMenu = document.querySelector('.dropdown-menu-premium');

if (menuWrapper && menuIcon && dropdownMenu) {
  menuWrapper.addEventListener('mouseenter', () => {
    dropdownMenu.style.opacity = '1';
    dropdownMenu.style.pointerEvents = 'auto';
    dropdownMenu.style.transform = 'translateY(3px)';
  });

  menuWrapper.addEventListener('mouseleave', () => {
    dropdownMenu.style.opacity = '0';
    dropdownMenu.style.pointerEvents = 'none';
    dropdownMenu.style.transform = 'translateY(-10px)';
  });
}

// =========================
// SIDE MENU LATERAL (si existe)
// =========================

const sideMenu = document.querySelector('.side-menu');
const overlay = document.querySelector('.overlay');
const openMenuBtn = document.querySelector('.open-side-menu');
const closeMenuBtn = document.querySelector('.close-side-menu');

if (sideMenu && overlay) {
  const openMenu = () => {
    sideMenu.classList.add('open');
    overlay.style.display = 'block';
  };

  const closeMenu = () => {
    sideMenu.classList.remove('open');
    overlay.style.display = 'none';
  };

  if (openMenuBtn) openMenuBtn.addEventListener('click', openMenu);
  if (closeMenuBtn) closeMenuBtn.addEventListener('click', closeMenu);

  overlay.addEventListener('click', closeMenu);
}

// =========================
// CATEGORÍAS – efecto hover
// =========================

const catBoxes = document.querySelectorAll('.cat-box');

catBoxes.forEach(box => {
  const img = box.querySelector('img');
  const title = box.querySelector('.hover-title');

  box.addEventListener('mouseenter', () => {
    img.style.opacity = '0';
    title.style.opacity = '1';
  });

  box.addEventListener('mouseleave', () => {
    img.style.opacity = '1';
    title.style.opacity = '0';
  });
});

// =========================
// SCROLL ANIMATIONS PARA PANELS
// =========================

const panels = document.querySelectorAll('.panel');

const revealOnScroll = () => {
  const triggerBottom = window.innerHeight / 1.2;

  panels.forEach(panel => {
    const panelTop = panel.getBoundingClientRect().top;

    if (panelTop < triggerBottom) {
      panel.classList.add('show-panel');
    } else {
      panel.classList.remove('show-panel');
    }
  });
};

window.addEventListener('scroll', revealOnScroll);
revealOnScroll();

// =========================
// VIDEO HERO (opcional)
// =========================
// El video ya funciona solo con HTML5.