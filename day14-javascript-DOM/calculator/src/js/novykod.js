let op = null;
let lastValue = null;
let newCounting = false;

const clearEvent = () => {
  const result = document.querySelector('.calc__result');
  const input = document.querySelector('.calc__input');
  const opShow = document.querySelector('.calc__operator');
  input.classList.remove('calc__input--modifier');
  input.value = '0';
  result.textContent = '0';
  op = null;
  opShow.textContent = '';
  newCounting = false;
};

const equalsEvent = () => {
  const resultText = document.querySelector('.calc__result');
  const input = document.querySelector('.calc__input');
  if (input.classList.contains('calc__input--modifier') && lastValue !== null) {
    input.value = lastValue;
  }
  lastValue = parseFloat(input.value, 10);
  switch (op) {
    case '+': resultText.textContent = parseFloat(resultText.textContent, 10) + parseFloat(input.value, 10);
      input.classList.add('calc__input--modifier');
      break;
    case '−': resultText.textContent = parseFloat(resultText.textContent, 10) - parseFloat(input.value, 10);
      input.classList.add('calc__input--modifier');
      break;
    case '×': resultText.textContent = parseFloat(resultText.textContent, 10) * parseFloat(input.value, 10);
      input.classList.add('calc__input--modifier');
      break;
    case '÷': resultText.textContent = parseFloat(resultText.textContent, 10) / parseFloat(input.value, 10);
      input.classList.add('calc__input--modifier');
      break;
    default: resultText.textContent = parseFloat(input.value, 10);
      input.value = '';
  }
  newCounting = true;
};

const updateOp = (sender) => {
  const opShow = document.querySelector('.calc__operator');
  opShow.textContent = sender.textContent;
};

const opClick = (event) => {
  const input = document.querySelector('.calc__input');
  if (!input.classList.contains('calc__input--modifier')) { equalsEvent(); }
  op = event.target.textContent;
  updateOp(event.target);
  newCounting = false;
};

const checkForNewCounting = () => {
  const input = document.querySelector('.calc__input');
  if (newCounting) {
    clearEvent();
  } else if (input.classList.contains('calc__input--modifier')) {
    input.classList.remove('calc__input--modifier');
    input.value = '';
    newCounting = false;
  }
};

const numberEvent = (event) => {
  const sender = event.target;
  const input = document.querySelector('.calc__input');
  checkForNewCounting();
  if (input.value === '0') {
    input.value = sender.textContent;
  } else {
    input.value += sender.textContent;
  }
};

const pointEvent = () => {
  const input = document.querySelector('.calc__input');
  checkForNewCounting();
  if (input.value === '0' || input.value === '') {
    input.value = '0.';
  } else if (input.value.indexOf('.') === -1) {
    input.value += '.';
  }
};


document.addEventListener('DOMContentLoaded', () => {
  const btnClear = document.querySelector('#btn-clear');
  btnClear.addEventListener('click', clearEvent);

  const btnPlus = document.querySelector('#btn-plus');
  btnPlus.addEventListener('click', opClick);

  const btnMinus = document.querySelector('#btn-minus');
  btnMinus.addEventListener('click', opClick);

  const btnTimes = document.querySelector('#btn-times');
  btnTimes.addEventListener('click', opClick);

  const btnDivides = document.querySelector('#btn-divide');
  btnDivides.addEventListener('click', opClick);

  const btnEquals = document.querySelector('#btn-equals');
  btnEquals.addEventListener('click', equalsEvent);

  // numbers

  const zero = document.querySelector('#btn-zero');
  zero.addEventListener('click', numberEvent);

  const one = document.querySelector('#btn-one');
  one.addEventListener('click', numberEvent);

  const two = document.querySelector('#btn-two');
  two.addEventListener('click', numberEvent);

  const three = document.querySelector('#btn-three');
  three.addEventListener('click', numberEvent);

  const four = document.querySelector('#btn-four');
  four.addEventListener('click', numberEvent);

  const five = document.querySelector('#btn-five');
  five.addEventListener('click', numberEvent);

  const six = document.querySelector('#btn-six');
  six.addEventListener('click', numberEvent);

  const seven = document.querySelector('#btn-seven');
  seven.addEventListener('click', numberEvent);

  const eight = document.querySelector('#btn-eight');
  eight.addEventListener('click', numberEvent);

  const nine = document.querySelector('#btn-nine');
  nine.addEventListener('click', numberEvent);

  const point = document.querySelector('#btn-decimal');
  point.addEventListener('click', pointEvent);
});
