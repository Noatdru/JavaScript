const addInput = document.querySelector('.addInput');
const submitBtn = document.querySelector('.submit');
const result = document.querySelector('.result');

const sumResult = document.querySelector('.sum');
const avgResult = document.querySelector('.avg');
const minResult = document.querySelector('.min');
const maxResult = document.querySelector('.max');
const allInputs = document.querySelectorAll('input');
let sum = 0;
let arr = [];

const callback = (e) => {
  arr.push(e.target.value);
  sum += Number(e.target.value);
  sumResult.textContent = sum || 0;
  avgResult.textContent = sum / allInputs.length || 0;
  minResult.textContent = Math.min(...arr);
  maxResult.textContent = Math.max(...arr);
};

allInputs.forEach((input) => {
  input.addEventListener('change', (e) => {
    callback(e);
  });

  input.addEventListener('focusout', (e) => {
    e.target.value == '' && input.remove(e.target);
  });
});

addInput.addEventListener('click', () => {
  if (allInputs.length >= 4) return;
  const newInput = document.createElement('input');
  newInput.type = 'text';
  newInput.classList.add('num');
  newInput.placeholder = 'Wprowadź liczbe';
  newInput.addEventListener('input', (e) => callback(e));
  document.body.insertAdjacentElement('afterbegin', newInput);
});