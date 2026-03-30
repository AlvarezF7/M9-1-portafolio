const projectsData = [
  {
    name: "Top Reposteras",
    description: "Este proyecto contiene la implementación inicial de un e-commerce de reposteria con la funcionalidad de loguear usuario y un carrito de compras activo.",
    url: "https://alvarezf7.github.io/M3-e-commer-carrito/",
    image: "./img/top-reposteras.png"
  },
  {
    name: "Pokédex",
    description: "Proyecto responsive con fines educativos para trabajar con API REST, mediante el uso de la API de Pókemon.",
    url: "https://alvarezf7.github.io/M4-Pokedex-api/",
    image: "./img/Pokedex.png"
  },
  {
    name: "Go-Art",
    description: "Este proyecto e-commerce incorpora registro/login de usuarios , carrito de compras, conexión a base de datos con PostgreSQL, Node.js y JWT.",
    url: "#",
    image: "./img/go-art.png"
  }
];


// Renderizar proyectos
function renderProjects() {
  const container = document.getElementById('projects-container');
  container.innerHTML = projectsData.map(p => `
    <div class="col">
      <div class="card h-100 project-card" role="button" tabindex="0" data-url="${p.url}">
        <img src="${p.image}" class="card-img-top img-card" alt="${p.name}">
        <div class="card-body d-flex flex-column">
          <h5 class="card-title">${p.name}</h5>
          <p class="card-text flex-grow-1">${p.description}</p>
          <span class="btn btn-primary mt-auto btn-ver">Ver proyecto</span>
        </div>
      </div>
    </div>
  `).join('');

  document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', () => window.open(card.dataset.url, '_blank'));
  });
}

// Scroll suave navbar
function smoothScroll() {
  document.querySelectorAll('a.nav-link').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
}

// Tema oscuro / claro
function initThemeToggle() {
  const toggle = document.getElementById('theme-toggle');
  const savedTheme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
  toggle.textContent = savedTheme === 'dark' ? '☀️' : '🌙';

  toggle.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    const newTheme = current === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    toggle.textContent = newTheme === 'dark' ? '☀️' : '🌙';
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderProjects();
  smoothScroll();
  initThemeToggle();
});