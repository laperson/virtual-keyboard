import eCode from './e_code.js';

let caps = 'off';
function capsLockUp() {
  Object.entries(eCode).forEach(([key, val]) => {
    if (val.ru.shift === '') {
      document.getElementsByClassName(key.toLowerCase())[0].style.textTransform = 'uppercase';
    }
  });
}

function capsLockDown() {
  Object.entries(eCode).forEach(([key, val]) => {
    if (val.ru.shift === '') {
      document.getElementsByClassName(key.toLowerCase())[0].style.textTransform = '';
    }
  });
}

document.addEventListener('keydown', (e) => {
  if (e.code === 'CapsLock') {
    if (caps === 'off') {
      capsLockUp();
      caps = 'on';
    } else {
      capsLockDown();
      caps = 'off';
    }
  }
});
