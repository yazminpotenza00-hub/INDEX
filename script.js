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
// CALESITA 3D ÚNICA CON AUTOPLAY
// =========================

const carousel = document.querySelector('.carousel-3d');
if (carousel) {

  const items = carousel.querySelectorAll('.item');
  let positions = [0,1,2,3]; // orden circular
  let isHovering = false;    // detecta si el mouse está sobre la calesita

  function render() {
    items.forEach((item, i) => {
      item.className = "item pos-" + positions[i];
    });
  }
  render();

  // Hover sobre cada imagen
  items.forEach((item, index) => {
    item.addEventListener('mouseenter', () => {
      isHovering = true;      // detiene autoplay
      const pos = positions[index];
      if (pos === 0) return; // ya está al frente

      // Movimiento inteligente
      if (pos === 1) positions.push(positions.shift());
      else if (pos === 3) positions.unshift(positions.pop());
      else if (pos === 2) { positions.push(positions.shift()); positions.push(positions.shift()); }

      render();
    });

    item.addEventListener('mouseleave', () => {
      isHovering = false;    // reinicia autoplay
    });
  });

  // =========================
  // AUTOPLAY
  // =========================
  setInterval(() => {
    if (!isHovering) {
      // gira a la izquierda automáticamente
      positions.push(positions.shift());
      render();
    }
  }, 3000); // cada 3 segundos
}



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

// Dropdown de idioma
const langDropdown = document.querySelector('.lang-dropdown');
const langBtn = document.querySelector('.lang-btn');

langBtn.addEventListener('click', () => {
  langDropdown.classList.toggle('open');
});

// Cerrar al hacer click fuera
document.addEventListener('click', (e) => {
  if (!langDropdown.contains(e.target)) {
    langDropdown.classList.remove('open');
  }
});

const tooltip = document.getElementById('tooltip');

function showTooltip(message) {
  tooltip.textContent = message;
  tooltip.classList.add('show');
  setTimeout(() => tooltip.classList.remove('show'), 1800);
}

// Ubicación → abrir Google Maps
document.getElementById('icon-location').addEventListener('click', () => {
  const address = encodeURIComponent("Via Roma 123, Milano, Italy");
  window.open(`https://www.google.com/maps/search/?api=1&query=${address}`, '_blank');
  showTooltip('Abriendo Google Maps...');
});

// Correo → copiar al portapapeles
document.getElementById('icon-mail').addEventListener('click', () => {
  const email = "info@laboratorioquaranta.it";
  navigator.clipboard.writeText(email).then(() => {
    showTooltip('Correo copiado al portapapeles!');
  });
});

// Teléfono → copiar al portapapeles
document.getElementById('icon-call').addEventListener('click', () => {
  const phone = "+39 02 1234567";
  navigator.clipboard.writeText(phone).then(() => {
    showTooltip('Número copiado al portapapeles!');
  });
});


