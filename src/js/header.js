import localizationData from '../assets/translations/index.js';

function getValueByPath(obj, path) {
  return path.split('.').reduce((acc, key) => acc?.[key], obj);
}

function localizeElements(lang) {
  const elements = document.querySelectorAll('[data-lang]');
  const localization = localizationData[lang] || {};

  elements.forEach(el => {
    const key = el.getAttribute('data-lang');
    const val = getValueByPath(localization, key);
    if (val !== undefined) el.innerHTML = val;
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const burgerBtn = document.querySelector('.header-burger-container');
  const mobileMenu = document.querySelector('.header-modal-wrapper');
  const closeBtn = document.querySelector(
    '.header-modal-wrapper-item-svg-close-container'
  );
  const body = document.body;

  function toggleMenu() {
    mobileMenu.classList.toggle('active');
    body.classList.toggle('is-hidden');
  }
  burgerBtn?.addEventListener('click', toggleMenu);
  closeBtn?.addEventListener('click', toggleMenu);

  document
    .querySelectorAll('.modal-header-contents-item-link')
    .forEach(link => {
      link.addEventListener('click', e => {
        e.preventDefault();
        toggleMenu();
        const href = link.getAttribute('href');
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
      });
    });

  // Модалка выбор языка
  const toggleModalLang = document.querySelector(
    '.header-modal-wrapper-select-box-container'
  );
  const dropdownModal = document.querySelector(
    '.header-modal-selectlang-checkbox'
  );
  const displayModal = document.querySelector(
    '.header-modal-wrapper-select-box-container-text-modal'
  );
  const modalLangs = document.querySelectorAll(
    '.header-modal-wrapper-select-box-checkbox-text-ua'
  );

  toggleModalLang?.addEventListener('click', () => {
    dropdownModal.classList.toggle('active-modal');
  });

  modalLangs.forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.textContent.trim().toLowerCase();
      displayModal.textContent = btn.textContent.trim();
      modalLangs.forEach(b =>
        b.classList.remove('active-header-checkbox-modal')
      );
      btn.classList.add('active-header-checkbox-modal');
      dropdownModal.classList.remove('active-modal');
      localStorage.setItem('selectedLang', lang);
      localizeElements(lang);
    });
  });

  // Десктоп выбор языка
  const langToggle = document.getElementById('langToggle');
  const langList = document.getElementById('langList');
  const desktopLangs = document.querySelectorAll('.lang-options-item');

  langToggle?.addEventListener('click', () =>
    langList.classList.toggle('hidden')
  );

  desktopLangs.forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.textContent.trim().toLowerCase();
      langToggle.textContent = `${btn.textContent.trim()} →`;
      desktopLangs.forEach(b =>
        b.classList.remove('active-header-checkbox-modal')
      );
      btn.classList.add('active-header-checkbox-modal');
      langList.classList.add('hidden');
      localStorage.setItem('selectedLang', lang);
      localizeElements(lang);
    });
  });

  // Загрузка сохранённого
  const saved = localStorage.getItem('selectedLang')?.toLowerCase();
  const lang = saved || 'ru';
  if (displayModal) displayModal.textContent = lang.toUpperCase();
  if (langToggle) langToggle.textContent = `${lang.toUpperCase()} →`;
  modalLangs.forEach(btn => {
    btn.classList.toggle(
      'active-header-checkbox-modal',
      btn.textContent.trim().toLowerCase() === lang
    );
  });
  desktopLangs.forEach(btn => {
    btn.classList.toggle(
      'active-header-checkbox-modal',
      btn.textContent.trim().toLowerCase() === lang
    );
  });

  localizeElements(lang);

  document.addEventListener('click', e => {
    if (!langToggle?.contains(e.target) && !langList?.contains(e.target)) {
      langList?.classList.add('hidden');
    }
    if (!toggleModalLang?.contains(e.target)) {
      dropdownModal?.classList.remove('active-modal');
    }
  });
});
