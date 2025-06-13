/* Нажатие на кнопку "Читать полностью" */
const btnReadMoreInv = document.getElementById('invest-btn');
const textInv = document.getElementById('text-invest');
const btnReadMoreInvSec = document.getElementById('invest-btn-1');
const textInvSec = document.getElementById('text-invest-1');

btnReadMoreInv.addEventListener('click', () => {
  textInv.classList.toggle('expanded');
  btnReadMoreInv.textContent = textInv.classList.contains('expanded')
    ? 'Скрыть'
    : 'Читать полностью';
});

btnReadMoreInvSec.addEventListener('click', () => {
  textInvSec.classList.toggle('expanded');
  btnReadMoreInvSec.textContent = textInvSec.classList.contains('expanded')
    ? 'Скрыть'
    : 'Читать полностью';
});
