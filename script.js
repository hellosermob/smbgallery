/* ═══════════════════════════════════════════════════════
   SERMOB1 — Catálogo Artístico
   script.js — datos de obra, filtros, lightbox
   ═══════════════════════════════════════════════════════

   CÓMO AGREGAR OBRA:
   1. Añade un objeto al array `artworks` con los campos:
      - id:         número único
      - title:      título de la obra
      - year:       año (number)
      - series:     nombre de la serie / técnica
      - technique:  técnica detallada
      - dimensions: medidas (e.g. "80 × 100 cm")
      - image:      ruta relativa a la imagen (e.g. "images/obra-01.jpg")
                    → deja "" si aún no tienes la imagen
      - desc:       descripción breve (opcional, puede ser "")
      - placeholder: color/gradiente CSS de respaldo mientras no hay imagen
                     { color1, color2, angle }

   2. Coloca las imágenes en la carpeta `images/`
   ═══════════════════════════════════════════════════════ */

// ──────────────────────────────────────────────
//  DATOS DE OBRA
//  Modifica, añade o elimina piezas aquí
// ──────────────────────────────────────────────
const artworks = [
  // ── Serie: Abstracto ──────────────────────
  {
    id: 1,
    title: "Sin título I",
    year: 2015,
    series: "Abstracto",
    technique: "Acrílico sobre lienzo",
    dimensions: "80 × 100 cm",
    image: "",
    desc: "",
    placeholder: { color1: "#c0392b", color2: "#e67e22", angle: "135deg" }
  },
  {
    id: 2,
    title: "Forma y vacío",
    year: 2017,
    series: "Abstracto",
    technique: "Acrílico sobre lienzo",
    dimensions: "60 × 90 cm",
    image: "",
    desc: "",
    placeholder: { color1: "#d35400", color2: "#f39c12", angle: "160deg" }
  },
  {
    id: 3,
    title: "Resonancia",
    year: 2018,
    series: "Abstracto",
    technique: "Óleo sobre lienzo",
    dimensions: "100 × 120 cm",
    image: "",
    desc: "",
    placeholder: { color1: "#922b21", color2: "#cb4335", angle: "110deg" }
  },
  {
    id: 4,
    title: "Campo magnético",
    year: 2019,
    series: "Abstracto",
    technique: "Técnica mixta sobre papel",
    dimensions: "50 × 70 cm",
    image: "",
    desc: "",
    placeholder: { color1: "#e74c3c", color2: "#f1948a", angle: "45deg" }
  },

  // ── Serie: Figuras ────────────────────────
  {
    id: 5,
    title: "Presencia I",
    year: 2016,
    series: "Figuras",
    technique: "Carboncillo sobre papel",
    dimensions: "70 × 100 cm",
    image: "",
    desc: "",
    placeholder: { color1: "#1a5276", color2: "#2e86c1", angle: "150deg" }
  },
  {
    id: 6,
    title: "Presencia II",
    year: 2018,
    series: "Figuras",
    technique: "Óleo sobre lienzo",
    dimensions: "80 × 110 cm",
    image: "",
    desc: "",
    placeholder: { color1: "#154360", color2: "#1f618d", angle: "120deg" }
  },
  {
    id: 7,
    title: "Fragmentos",
    year: 2020,
    series: "Figuras",
    technique: "Acrílico sobre tabla",
    dimensions: "60 × 80 cm",
    image: "",
    desc: "",
    placeholder: { color1: "#4a235a", color2: "#7d3c98", angle: "140deg" }
  },
  {
    id: 8,
    title: "Interior",
    year: 2021,
    series: "Figuras",
    technique: "Técnica mixta",
    dimensions: "90 × 120 cm",
    image: "",
    desc: "",
    placeholder: { color1: "#212f3d", color2: "#2e4057", angle: "130deg" }
  },

  // ── Serie: Paisaje ────────────────────────
  {
    id: 9,
    title: "Horizonte",
    year: 2017,
    series: "Paisaje",
    technique: "Óleo sobre lienzo",
    dimensions: "100 × 150 cm",
    image: "",
    desc: "",
    placeholder: { color1: "#1e8449", color2: "#82e0aa", angle: "160deg" }
  },
  {
    id: 10,
    title: "Umbral",
    year: 2019,
    series: "Paisaje",
    technique: "Acrílico sobre lienzo",
    dimensions: "80 × 120 cm",
    image: "",
    desc: "",
    placeholder: { color1: "#145a32", color2: "#27ae60", angle: "140deg" }
  },
  {
    id: 11,
    title: "Profundidad",
    year: 2021,
    series: "Paisaje",
    technique: "Técnica mixta",
    dimensions: "70 × 100 cm",
    image: "",
    desc: "",
    placeholder: { color1: "#7d6608", color2: "#b7950b", angle: "125deg" }
  },
  {
    id: 12,
    title: "Luz de tarde",
    year: 2023,
    series: "Paisaje",
    technique: "Óleo sobre lienzo",
    dimensions: "90 × 130 cm",
    image: "",
    desc: "",
    placeholder: { color1: "#1a5276", color2: "#117a65", angle: "155deg" }
  },

  // ── Serie: Técnica mixta ──────────────────
  {
    id: 13,
    title: "Estratos I",
    year: 2020,
    series: "Técnica mixta",
    technique: "Técnica mixta sobre tabla",
    dimensions: "70 × 90 cm",
    image: "",
    desc: "",
    placeholder: { color1: "#424949", color2: "#717d7e", angle: "145deg" }
  },
  {
    id: 14,
    title: "Estratos II",
    year: 2022,
    series: "Técnica mixta",
    technique: "Técnica mixta sobre lienzo",
    dimensions: "80 × 100 cm",
    image: "",
    desc: "",
    placeholder: { color1: "#212121", color2: "#616161", angle: "135deg" }
  },
  {
    id: 15,
    title: "Convergencia",
    year: 2023,
    series: "Técnica mixta",
    technique: "Técnica mixta",
    dimensions: "100 × 130 cm",
    image: "",
    desc: "",
    placeholder: { color1: "#1b2631", color2: "#283747", angle: "120deg" }
  },
  {
    id: 16,
    title: "Sin título II",
    year: 2024,
    series: "Técnica mixta",
    technique: "Técnica mixta",
    dimensions: "90 × 120 cm",
    image: "",
    desc: "",
    placeholder: { color1: "#4d5656", color2: "#839192", angle: "160deg" }
  }
];

// ──────────────────────────────────────────────
//  ESTADO
// ──────────────────────────────────────────────
let activeFilter = 'all';
let lightboxIndex = 0;
let filteredArtworks = [];

// ──────────────────────────────────────────────
//  HELPERS
// ──────────────────────────────────────────────
function placeholderGradient(p) {
  return `linear-gradient(${p.angle}, ${p.color1}, ${p.color2})`;
}

function getSeries() {
  const seen = new Set();
  return artworks
    .map(a => a.series)
    .filter(s => { if (seen.has(s)) return false; seen.add(s); return true; });
}

// ──────────────────────────────────────────────
//  RENDER — Filter buttons
// ──────────────────────────────────────────────
function renderFilters() {
  const container = document.getElementById('filters');
  const series = getSeries();
  series.forEach(s => {
    const btn = document.createElement('button');
    btn.className = 'filter-btn';
    btn.dataset.filter = s;
    btn.textContent = s;
    btn.addEventListener('click', () => applyFilter(s));
    container.appendChild(btn);
  });
}

// ──────────────────────────────────────────────
//  RENDER — Gallery cards
// ──────────────────────────────────────────────
function renderGallery(items) {
  const gallery = document.getElementById('gallery');
  const empty   = document.getElementById('gallery-empty');
  const count   = document.getElementById('obra-count');

  gallery.innerHTML = '';

  const label = activeFilter === 'all' ? 'obras en total' : `obra en ${activeFilter}`;
  count.textContent = `${items.length} ${label}`;

  if (items.length === 0) {
    empty.hidden = false;
    return;
  }
  empty.hidden = true;

  items.forEach((artwork, idx) => {
    const card = document.createElement('article');
    card.className = 'card';
    card.setAttribute('role', 'listitem');
    card.setAttribute('tabindex', '0');
    card.setAttribute('aria-label', `${artwork.title}, ${artwork.year}`);
    card.style.animationDelay = `${idx * 40}ms`;

    card.innerHTML = `
      <div class="card__img-wrap">
        <img
          class="card__img"
          alt="${artwork.title}"
          loading="lazy"
          ${artwork.image ? `src="${artwork.image}"` : ''}
        >
        <div
          class="card__placeholder"
          style="background: ${placeholderGradient(artwork.placeholder)}"
        ></div>
        <div class="card__overlay">
          <span class="card__overlay-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="1.5">
              <circle cx="11" cy="11" r="8"/>
              <line x1="21" y1="21" x2="16.65" y2="16.65"/>
              <line x1="11" y1="8" x2="11" y2="14"/>
              <line x1="8" y1="11" x2="14" y2="11"/>
            </svg>
          </span>
        </div>
      </div>
      <div class="card__body">
        <p class="card__series">${artwork.series}</p>
        <h3 class="card__title">${artwork.title}</h3>
        <p class="card__meta">${artwork.year} — ${artwork.technique}</p>
      </div>
    `;

    // Handle image load
    const img = card.querySelector('.card__img');
    if (artwork.image) {
      img.addEventListener('load', () => img.classList.add('loaded'));
      img.addEventListener('error', () => { /* keep placeholder */ });
    }

    // Open lightbox
    card.addEventListener('click', () => openLightbox(idx));
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openLightbox(idx);
      }
    });

    gallery.appendChild(card);
  });
}

// ──────────────────────────────────────────────
//  FILTER
// ──────────────────────────────────────────────
function applyFilter(filter) {
  activeFilter = filter;

  // Update button states
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.filter === filter);
  });

  // Filter artworks
  filteredArtworks = filter === 'all'
    ? [...artworks]
    : artworks.filter(a => a.series === filter);

  renderGallery(filteredArtworks);
}

// ──────────────────────────────────────────────
//  LIGHTBOX
// ──────────────────────────────────────────────
function openLightbox(idx) {
  lightboxIndex = idx;
  updateLightbox();

  const lb       = document.getElementById('lightbox');
  const backdrop = document.getElementById('lb-backdrop');

  lb.hidden = false;
  requestAnimationFrame(() => {
    lb.classList.add('open');
    backdrop.classList.add('open');
  });

  document.body.style.overflow = 'hidden';
  document.getElementById('lb-close').focus();
}

function closeLightbox() {
  const lb       = document.getElementById('lightbox');
  const backdrop = document.getElementById('lb-backdrop');

  lb.classList.remove('open');
  backdrop.classList.remove('open');
  document.body.style.overflow = '';

  lb.addEventListener('transitionend', () => {
    lb.hidden = true;
  }, { once: true });
}

function updateLightbox() {
  const artwork = filteredArtworks[lightboxIndex];
  if (!artwork) return;

  const img         = document.getElementById('lb-img');
  const placeholder = document.getElementById('lb-placeholder');

  document.getElementById('lb-series').textContent    = artwork.series;
  document.getElementById('lb-title').textContent     = artwork.title;
  document.getElementById('lb-year').textContent      = artwork.year;
  document.getElementById('lb-technique').textContent = artwork.technique;
  document.getElementById('lb-dimensions').textContent = artwork.dimensions;
  document.getElementById('lb-index').textContent     = lightboxIndex + 1;
  document.getElementById('lb-total').textContent     = filteredArtworks.length;

  // Description row visibility
  const descRow = document.getElementById('lb-desc-row');
  const desc     = document.getElementById('lb-desc');
  if (artwork.desc) {
    desc.textContent = artwork.desc;
    descRow.hidden = false;
  } else {
    descRow.hidden = true;
  }

  // Image / placeholder
  placeholder.style.background = placeholderGradient(artwork.placeholder);
  img.alt = artwork.title;

  if (artwork.image) {
    img.style.display = '';
    placeholder.style.position = 'absolute';
    img.src = artwork.image;
    img.onload = () => { placeholder.style.opacity = '0'; };
    img.onerror = () => { img.style.display = 'none'; placeholder.style.opacity = '1'; };
  } else {
    img.style.display = 'none';
    placeholder.style.opacity = '1';
    placeholder.style.position = 'relative';
    placeholder.style.height = '400px';
  }

  // Nav button state
  document.getElementById('lb-prev').disabled = lightboxIndex === 0;
  document.getElementById('lb-next').disabled = lightboxIndex === filteredArtworks.length - 1;
}

function prevArtwork() {
  if (lightboxIndex > 0) {
    lightboxIndex--;
    updateLightbox();
  }
}

function nextArtwork() {
  if (lightboxIndex < filteredArtworks.length - 1) {
    lightboxIndex++;
    updateLightbox();
  }
}

// ──────────────────────────────────────────────
//  NAVIGATION — sticky scroll effect
// ──────────────────────────────────────────────
function initNavScroll() {
  const nav = document.getElementById('nav');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });
}

// ──────────────────────────────────────────────
//  NAVIGATION — mobile menu
// ──────────────────────────────────────────────
function initMobileMenu() {
  const btn    = document.getElementById('nav-menu-btn');
  const mobile = document.getElementById('nav-mobile');

  btn.addEventListener('click', () => {
    const expanded = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!expanded));
    mobile.hidden = expanded;
  });

  // Close on nav link click
  mobile.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      btn.setAttribute('aria-expanded', 'false');
      mobile.hidden = true;
    });
  });
}

// ──────────────────────────────────────────────
//  SCROLL ANIMATIONS — fade-up sections
// ──────────────────────────────────────────────
function initScrollAnimations() {
  const targets = document.querySelectorAll('.about, .contact, .stats-bar, .filters');
  targets.forEach(el => el.classList.add('fade-up'));

  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });

  targets.forEach(el => obs.observe(el));
}

// ──────────────────────────────────────────────
//  KEYBOARD EVENTS
// ──────────────────────────────────────────────
document.addEventListener('keydown', e => {
  const lb = document.getElementById('lightbox');
  if (lb.hidden) return;

  switch (e.key) {
    case 'Escape':     closeLightbox(); break;
    case 'ArrowLeft':  prevArtwork();   break;
    case 'ArrowRight': nextArtwork();   break;
  }
});

// ──────────────────────────────────────────────
//  EVENT LISTENERS
// ──────────────────────────────────────────────
document.getElementById('lb-close').addEventListener('click', closeLightbox);
document.getElementById('lb-prev').addEventListener('click', prevArtwork);
document.getElementById('lb-next').addEventListener('click', nextArtwork);

// Close on backdrop click
document.getElementById('lb-backdrop').addEventListener('click', closeLightbox);

// "Toda la obra" filter button
document.querySelector('.filter-btn[data-filter="all"]').addEventListener('click', () => applyFilter('all'));

// ──────────────────────────────────────────────
//  INIT
// ──────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  // Footer year
  const yearEl = document.getElementById('footer-year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Build UI
  renderFilters();
  filteredArtworks = [...artworks];
  renderGallery(filteredArtworks);

  initNavScroll();
  initMobileMenu();
  initScrollAnimations();
});
