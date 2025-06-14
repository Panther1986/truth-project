document.addEventListener('DOMContentLoaded', () => {
  const burgerBtn = document.querySelector('.header-burger-container');
  const mobileMenuEl = document.querySelector('.header-modal-wrapper');
  const mobileMenuCloseBtn = document.querySelector(
    '.header-modal-wrapper-item-svg-close-container'
  );
  const bodyEl = document.querySelector('body');

  // Открытие и закрытие мобильного меню
  function toggleOpenModal() {
    mobileMenuEl.classList.toggle('active');
    bodyEl.classList.toggle('is-hidden');
  }

  burgerBtn?.addEventListener('click', toggleOpenModal);
  mobileMenuCloseBtn?.addEventListener('click', toggleOpenModal);

  // Закрытие модалки по клику на ссылки
  const modalLinks = document.querySelectorAll(
    '.modal-header-contents-item-link'
  );
  modalLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const href = link.getAttribute('href');
      const target = document.querySelector(href);

      // Закрыть модалку
      mobileMenuEl.classList.remove('active');
      bodyEl.classList.remove('is-hidden');

      // Прокрутить до секции
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Выбор языка — МОДАЛКА
  const toggleBtnModal = document.querySelector(
    '.header-modal-wrapper-select-box-container'
  );
  const dropdownModal = document.querySelector(
    '.header-modal-selectlang-checkbox'
  );
  const displayTextModal = document.querySelector(
    '.header-modal-wrapper-select-box-container-text-modal'
  );
  const langButtonsModal = document.querySelectorAll(
    '.header-modal-wrapper-select-box-checkbox-text-ua'
  );

  toggleBtnModal?.addEventListener('click', () => {
    dropdownModal.classList.toggle('active-modal');
  });

  langButtonsModal.forEach(btn => {
    btn.addEventListener('click', e => {
      const selectedLang = e.target.textContent.trim();
      displayTextModal.textContent = selectedLang;
      langButtonsModal.forEach(b =>
        b.classList.remove('active-header-checkbox-modal')
      );
      btn.classList.add('active-header-checkbox-modal');
      dropdownModal.classList.remove('active-modal');
      localStorage.setItem('selectedLang', selectedLang);
    });
  });

  // Выбор языка — ДЕСКТОП
  const langToggle = document.getElementById('langToggle');
  const langList = document.getElementById('langList');
  const langButtons = document.querySelectorAll('.lang-options-item');

  langToggle?.addEventListener('click', () => {
    langList.classList.toggle('hidden');
  });

  langButtons.forEach(btn => {
    btn.addEventListener('click', e => {
      const selectedLang = e.target.textContent.trim();
      langToggle.textContent = `${selectedLang} →`;
      langButtons.forEach(b =>
        b.classList.remove('active-header-checkbox-modal')
      );
      btn.classList.add('active-header-checkbox-modal');
      langList.classList.add('hidden');
      localStorage.setItem('selectedLang', selectedLang);
    });
  });

  // Установка сохранённого языка
  const savedLang = localStorage.getItem('selectedLang');
  if (savedLang) {
    if (displayTextModal) displayTextModal.textContent = savedLang;
    if (langToggle) langToggle.textContent = `${savedLang} →`;

    langButtonsModal.forEach(btn => {
      btn.classList.toggle(
        'active-header-checkbox-modal',
        btn.textContent.trim() === savedLang
      );
    });
    langButtons.forEach(btn => {
      btn.classList.toggle(
        'active-header-checkbox-modal',
        btn.textContent.trim() === savedLang
      );
    });
  }

  // Закрытие дропдаунов по клику вне
  document.addEventListener('click', e => {
    if (!langToggle?.contains(e.target) && !langList?.contains(e.target)) {
      langList?.classList.add('hidden');
    }
    if (!toggleBtnModal?.contains(e.target)) {
      dropdownModal?.classList.remove('active-modal');
    }
  });
});
