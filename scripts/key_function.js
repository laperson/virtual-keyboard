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

document.querySelector('.tab').addEventListener('click', () => {
  let cursor = field.selectionStart;
  const space = '  ';
  field.value = field.value.slice(0, field.selectionStart)
  + space + field.value.slice(field.selectionStart);
  cursor += 2;
  field.selectionStart = cursor;
  field.selectionEnd = cursor;
});

document.querySelector('.backspace').addEventListener('click', () => {
  let cursor = field.selectionStart;
  field.value = field.value.slice(0, field.selectionStart - 1)
  + field.value.slice(field.selectionStart);
  cursor -= 1;
  field.selectionStart = cursor;
  field.selectionEnd = cursor;
});

document.querySelector('.delete').addEventListener('click', () => {
  const cursor = field.selectionStart;
  field.value = field.value.slice(0, field.selectionStart)
  + field.value.slice(field.selectionStart + 1);
  field.selectionStart = cursor;
  field.selectionEnd = cursor;
});

document.querySelector('.enter').addEventListener('click', () => {
  let cursor = field.selectionStart;
  const space = '\n';
  field.value = field.value.slice(0, field.selectionStart)
  + space + field.value.slice(field.selectionStart);
  cursor += 1;
  field.selectionStart = cursor;
  field.selectionEnd = cursor;
});

document.addEventListener('keydown', (e) => {
  if (e.code === 'Tab') {
    let cursor = field.selectionStart;
    const space = '  ';
    field.value = field.value.slice(0, field.selectionStart)
    + space + field.value.slice(field.selectionStart);
    cursor += 2;
    field.selectionStart = cursor;
    field.selectionEnd = cursor;
  }
});
