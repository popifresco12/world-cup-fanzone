/* =========================================
   FANZONE 2026 — i18n ENGINE
   ========================================= */

const I18N = {
  currentLang: 'en',
  translations: {},

  async load(lang) {
    try {
      const res = await fetch(`locales/${lang}.json`);
      if (!res.ok) throw new Error('Locale not found');
      this.translations = await res.json();
      this.currentLang = lang;
      document.documentElement.lang = lang;
      this.apply();
      localStorage.setItem('fanzone-lang', lang);
    } catch (e) {
      console.warn('i18n load failed:', e);
    }
  },

  t(key, fallback = '') {
    const parts = key.split('.');
    let obj = this.translations;
    for (const p of parts) {
      obj = obj?.[p];
      if (obj === undefined) return fallback || key;
    }
    return obj;
  },

  apply() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const text = this.t(key, el.textContent);
      el.textContent = text;
    });
    document.querySelectorAll('[data-i18n-title]').forEach(el => {
      const key = el.getAttribute('data-i18n-title');
      const text = this.t(key, el.getAttribute('title') || '');
      el.setAttribute('title', text);
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      const text = this.t(key, el.placeholder);
      el.placeholder = text;
    });
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.getAttribute('data-i18n-html');
      const text = this.t(key, '');
      if (text) el.innerHTML = text;
    });
    document.querySelectorAll('meta[data-i18n-title]').forEach(el => {
      const key = el.getAttribute('data-i18n-title');
      const text = this.t(key, '');
      if (text) document.title = text;
    });
  },

  init() {
    const saved = localStorage.getItem('fanzone-lang') || 'en';
    this.load(saved);
  }
};

function setLang(lang) {
  I18N.load(lang);
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  I18N.init();
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLang(btn.dataset.lang));
  });
});
