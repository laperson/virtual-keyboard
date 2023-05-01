import eCode from './e_code.js';

document.addEventListener('keydown', (e) => {
  const key = document.getElementsByClassName(e.code.toLowerCase())[0];
  key.classList.add('active');
  document.addEventListener('keyup', () => key.classList.remove('active'));
});

function switchLang(lang) {
  const key = document.querySelectorAll('.key');
  Object.values(eCode).forEach((lan, i) => {
    key[i].innerHTML = lan[lang].regular;
  });
}

document.addEventListener('keydown', (e) => {
  if (e.ctrlKey && e.altKey) {
    if (document.cookie === 'lang=en') {
      switchLang('ru');
      document.cookie = 'lang=ru';
    } else {
      switchLang('en');
      document.cookie = 'lang=en';
    }
  }
});
