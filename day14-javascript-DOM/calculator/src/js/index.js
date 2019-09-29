
let result = 0;

/* click  */


/* Plus */

const handlePlusClick = () => {
  const textNumber = document.querySelector('#result');
  const number = parseInt(textNumber.value);
  result += number;

  const textResult = document.querySelector('#input');
  textResult.textContent = result;
};
/* Minus */

const handleMinusClick = () => {
  const textNumber = document.querySelector('#input');
  const number = parseInt(textNumber.value, 10);
  result -= number;

  const textResult = document.querySelector('#result');
  textResult.textContent = resul
/* Clear */
const handleClearClick = () => {
  const textNumber = document.querySelector('#input');
  textNumber.value = 0;

  const textResult = document.querySelector('#result');
  textResult.textContent = 0;
};

/* Times */
const handleTimesClick = () => {
  const textTimes1 = document.querySelector('#input');
  const timer = parseInt(textTimes1.value, 10);
  const textTimes2 = document.querySelector('#result');
  const timer2 = parseInt(textTimes2.innerHTML, 10);

  result = timer * timer2;

  const textResult = document.querySelector('#result');
  textResult.textContent = result;
};

/* Divides */

const handleDivideClick = () => {
  const textDivides = document.querySelector('#input');
  const divider = parseInt(textDivides.value, 10);
  const textDivides2 = document.querySelector('#result');
  const divider2 = parseInt(textDivides2.innerHTML, 10);
  result = divider / divider2;

  const textResult = document.querySelector('#result');
  textResult.textContent = result;
};

/* const button = document.querySelector('#btn');
button.addEventListener('click', button.value); */


/* Execution */
document.addEventListener('DOMContentLoaded', () => {
  const btnClear = document.querySelector('#btn-clear');
  btnClear.addEventListener('click', handleClearCl);

  /* const addDigit = document.querySelector('#');
  addDigit.addEventListener('click', showDigit); */

  const btnPlus = document.querySelector('#btn-plus');
  btnPlus.addEventListener('click', handlePlusClick);

  const btnMinus = document.querySelector('#btn-minus');
  btnMinus.addEventListener('click', handleMinusClick);

  const btnTimes = document.querySelector('#btn-times');
  btnTimes.addEventListener('click', handleTimesClick);

  const btnDivides = document.querySelector('#btn-divide');
  btnDivides.addEventListener('click', handleDivideClick);
});