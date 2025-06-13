/* Нажатие на кнопку "Читать полностью" */
const btnReadMore = document.getElementById('btn-read-full');
const textReform = document.getElementById('text-reform');
const btnReadMoreSec = document.getElementById('btn-read-full-1');
const textReformSec = document.getElementById('text-reform-1');

btnReadMore.addEventListener('click', () => {
  textReform.classList.toggle('expanded');
  btnReadMore.textContent = textReform.classList.contains('expanded')
    ? 'Скрыть'
    : 'Читать полностью';
});

btnReadMoreSec.addEventListener('click', () => {
  textReformSec.classList.toggle('expanded');
  btnReadMoreSec.textContent = textReformSec.classList.contains('expanded')
    ? 'Скрыть'
    : 'Читать полностью';
});
