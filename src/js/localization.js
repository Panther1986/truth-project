import localizationData from '../assets/translations/index.js';
// import { applyFooterMargin } from './footer';

function getValueByPath(obj, path) {
  const keys = path.split('.');

  return keys.reduce((acc, key) => (acc ? acc[key] : undefined), obj);
}

function localizeElements(LANG) {
  const elements = document.querySelectorAll('[data-lang]');
  console.log(elements);
  const localization = localizationData[LANG] || {};

  elements.forEach(element => {
    const langKey = element.getAttribute('data-lang');
    const langValue = getValueByPath(localization, langKey);

    if (langValue !== undefined) {
      element.innerHTML = langValue;
    }
  });

  //   applyFooterMargin(LANG);
}

export default localizeElements;
