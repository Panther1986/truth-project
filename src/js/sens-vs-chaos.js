const tabs = document.querySelectorAll('.tab');
const contents = document.querySelectorAll('.tab-content');

const btnReadMoreSens = document.getElementById('sens-btn');
const textSens = document.getElementById('sens-text');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const tabId = tab.getAttribute('data-tab');

    // Удалить активные классы
    tabs.forEach(t => t.classList.remove('active'));
    contents.forEach(c => c.classList.remove('active'));

    // Добавить активный класс выбранной вкладке и контенту
    tab.classList.add('active');
    document
      .querySelector(`.tab-content[data-content="${tabId}"]`)
      .classList.add('active');
  });
});
btnReadMoreSens.addEventListener('click', () => {
  textSens.classList.toggle('expanded');
  btnReadMoreSens.textContent = textSens.classList.contains('expanded')
    ? 'Скрыть'
    : 'Читать полностью';
});
