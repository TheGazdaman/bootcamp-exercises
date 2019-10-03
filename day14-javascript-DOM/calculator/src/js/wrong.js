/* Plus */

const handlePlusClick = () => {
  const textNumber = document.querySelector('#current-operand');
  const number = parseInt(textNumber.value, 10);
  result += number;

  const textResult = document.querySelector('#previous-operand');
  textResult.textContent = textNumber.value;
};
/* Minus */

const handleMinusClick = () => {
  const textNumber = document.querySelector('#current-operand');
  const number = parseInt(textNumber.value, 10);
  result -= number;

  const textResult = document.querySelector('#previous-operand');
  textResult.textContent = result;
};
/* Clear */
const handleClearClick = () => {
  const textNumber = document.querySelector('#current-operand');
  textNumber.value = 0;

  const textResult = document.querySelector('#previous-operand');
  textResult.textContent = 0;
};

/* Times */
const handleTimesClick = () => {
  const textTimes1 = document.querySelector('#current-operand');
  const timer = parseInt(textTimes1.value, 10);

  const textTimes2 = document.querySelector('#previous-operand');
  const timer2 = parseInt(textTimes2.innerHTML, 10);

  result = timer * timer2;

  const textResult = document.querySelector('#previous-operand');
  textResult.textContent = result;
};

/* Divides */

const handleDivideClick = () => {
  const textDivides = document.querySelector('#current-operand');
  const divider = parseInt(textDivides.value, 10);

  const textDivides2 = document.querySelector('#previous-operand');
  const divider2 = parseInt(textDivides2.innerHTML, 10);
  result = divider / divider2;

  const textResult = document.querySelector('#previous-operand');
  textResult.textContent = result;
};

/* const button = document.querySelector('#btn');
button.addEventListener('click', button.value); */


/* Execution */
document.addEventListener('DOMContentLoaded', () => {
  const btnClear = document.querySelector('#btn-clear');
  btnClear.addEventListener('click', handleClearClick);

  const btnPlus = document.querySelector('#btn-plus');
  btnPlus.addEventListener('click', handlePlusClick);

  const btnMinus = document.querySelector('#btn-minus');
  btnMinus.addEventListener('click', handleMinusClick);

  const btnTimes = document.querySelector('#btn-times');
  btnTimes.addEventListener('click', handleTimesClick);

  const btnDivides = document.querySelector('#btn-divide');
  btnDivides.addEventListener('click', handleDivideClick);
});