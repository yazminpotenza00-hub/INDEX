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

// carrusel


  const track = document.querySelector(".carousel-track");
  const items = [...document.querySelectorAll(".carousel-item")];
  const nextBtn = document.querySelector(".next");
  const prevBtn = document.querySelector(".prev");

  let index = 0;

  function updatePositions() {
    const total = items.length;

    items.forEach((item, i) => {
      item.className = "carousel-item"; // reset

      if (i === index) {
        item.classList.add("pos-0");
      } else if (i === (index + 1) % total) {
        item.classList.add("pos-1");
      } else if (i === (index + 2) % total) {
        item.classList.add("pos-2");
      } else if (i === (index + 3) % total) {
        item.classList.add("pos-3");
      }
    });
  }

  nextBtn.onclick = () => {
    index = (index + 1) % items.length;
    updatePositions();
  };

  prevBtn.onclick = () => {
    index = (index - 1 + items.length) % items.length;
    updatePositions();
  };

  updatePositions();
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


