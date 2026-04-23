/* =========================================
   FANZONE 2026 — SHARED COMPONENTS
   ========================================= */

function injectNavbar() {
  const nav = document.getElementById('navbar');
  if (!nav) return;
  const page = location.pathname.split('/').pop() || 'index.html';
  const isHome = page === '' || page === 'index.html';
  nav.innerHTML = `
    <div class="container">
      <a href="index.html" class="logo">
        <span class="ball">⚽</span>
        FANZONE <span>2026</span>
      </a>
      <ul class="nav-links" id="navLinks">
        <li><a href="${isHome ? '#' : 'index.html'}" class="${isHome ? 'active' : ''}" data-i18n="nav.matches">Matches</a></li>
        <li><a href="${isHome ? 'index.html#about' : 'index.html#about'}" data-i18n="nav.about">About</a></li>
        <li class="lang-selector">
          <button class="lang-btn ${I18N.currentLang==='en'?'active':''}" data-lang="en">EN</button>
          <button class="lang-btn ${I18N.currentLang==='es'?'active':''}" data-lang="es">ES</button>
          <button class="lang-btn ${I18N.currentLang==='fr'?'active':''}" data-lang="fr">FR</button>
        </li>
      </ul>
      <button class="mobile-toggle" id="mobileToggle">☰</button>
    </div>
  `;
  // Re-bind lang buttons after inject
  nav.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLang(btn.dataset.lang));
  });
}

function injectFooter() {
  const footer = document.getElementById('footer');
  if (!footer) return;
  footer.innerHTML = `
    <div class="container">
      <p data-i18n="footer.text">FanZone 2026 — Unofficial fan gatherings. Not affiliated with FIFA.</p>
      <p style="margin-top:0.5rem;opacity:0.6;font-size:0.75rem;">© 2026 FanZone</p>
    </div>
  `;
}

document.addEventListener('DOMContentLoaded', () => {
  injectNavbar();
  injectFooter();
});
