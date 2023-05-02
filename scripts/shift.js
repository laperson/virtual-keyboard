import { capss, capsLockUp, capsLockDown } from './capslock.js';
import eCode from './e_code.js';
import backKeys from './main.js';

const shiftKey = document.querySelectorAll('.shiftright, .shiftleft');

let sw = 'off';
function shift(lang) {
  const key = document.querySelectorAll('.key');
  Object.values(eCode).forEach((l, i) => {
    key[i].innerHTML = l[lang].shift;
  });
}

function lostKeys(lang) {
  const key = document.querySelectorAll('.key');
  Object.entries(eCode).forEach(([k, l], i) => {
    if (l.ru.shift === '' && lang === 'en' && (k === 'Backquote' || k === 'BracketLeft'
               || k === 'BracketRight' || k === 'Semicolon' || k === 'Quote'
               || k === 'Comma' || k === 'Period')) {
      key[i].innerHTML = l[lang].shift;
    } else if (l.ru.shift === '') {
      key[i].innerHTML = l[lang].regular;
    }
  });
}

document.addEventListener('keydown', (e) => {
  if (e.shiftKey) {
    sw = 'on';
    if (document.cookie === 'lang=en') {
      shift('en');
      lostKeys('en');
    } else {
      shift('ru');
      lostKeys('ru');
    }
    if (capss() === 'off') {
      capsLockUp();
    } else capsLockDown();
  }
});

document.addEventListener('keyup', (e) => {
  sw = 'off';
  if (e.key === 'Shift') {
    if (document.cookie === 'lang=en') {
      backKeys('en');
    } else backKeys('ru');
    if (capss() === 'off') {
      capsLockDown();
    } else capsLockUp();
  }
});

export default function swTo() {
  return sw;
}

shiftKey.forEach((el) => {
  el.addEventListener('mousedown', () => {
    sw = 'on';
    if (document.cookie === 'lang=en') {
      shift('en');
      lostKeys('en');
    } else {
      shift('ru');
      lostKeys('ru');
    }
    if (capss() === 'off') {
      capsLockUp();
    } else capsLockDown();
  });
});

shiftKey.forEach((el) => {
  el.addEventListener('mouseup', () => {
    if (document.cookie === 'lang=en') {
      backKeys('en');
    } else backKeys('ru');
    if (capss() === 'off') {
      capsLockDown();
    } else capsLockUp();
  });
});
