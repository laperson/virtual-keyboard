import { capss } from './capslock.js';
import sw from './shift.js';

const key = document.querySelectorAll('.key:not(.tab):not(.capslock):not(.shiftleft):not(.controlleft):not(.altleft):not(.metaleft):not(.enter):not(.delete):not(.backspace):not(.shiftright):not(.controlright):not(.altright)');
const field = document.querySelector('.field');
const focus = document.querySelectorAll('.key');

focus.forEach((el) => el.addEventListener('click', () => field.focus()));

key.forEach((el) => {
  el.addEventListener('click', () => {
    let cursor = field.selectionStart;
    const str = capss() === 'on' || sw() === 'on' ? el.firstChild.nodeValue.toLocaleUpperCase() : el.firstChild.nodeValue;
    field.value = field.value.slice(0, field.selectionStart)
    + str + field.value.slice(field.selectionStart);
    cursor += 1;
    field.selectionStart = cursor;
    field.selectionEnd = cursor;
  });
});
