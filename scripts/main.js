import eCode from './e_code.js';

const field = document.querySelector('.field');

document.addEventListener('keydown', (e) => {
  if (e.altKey || e.code === 'Tab') e.preventDefault();
  field.focus();
  const key = document.getElementsByClassName(e.code.toLowerCase())[0];
  if (key === undefined) return;
  key.classList.add('active');
  document.addEventListener('keyup', () => key.classList.remove('active'));
});

export default function switchLang(lang) {
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
