/* Нажатие на кнопку "Читать полностью" */
const btnReadMoreLow = document.getElementById('low-btn-read-full');
const textLow = document.getElementById('text-low');
const btnReadMoreLowSec = document.getElementById('low-btn-read-full-1');
const textLowSec = document.getElementById('text-low-1');

btnReadMoreLow.addEventListener('click', () => {
  textLow.classList.toggle('expanded');
  btnReadMoreLow.textContent = textLow.classList.contains('expanded')
    ? 'Скрыть'
    : 'Читать полностью';
});

btnReadMoreLowSec.addEventListener('click', () => {
  textLowSec.classList.toggle('expanded');
  btnReadMoreLowSec.textContent = textLowSec.classList.contains('expanded')
    ? 'Скрыть'
    : 'Читать полностью';
});
