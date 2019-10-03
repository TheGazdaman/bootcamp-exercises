
const showZero = () => {
  const calcInput = document.querySelector('.calc__input');
  if (calcInput.value === '0') {
    calcInput.value = '0';
  } else {
    calcInput.value += '0';
  }
};

const showOne = () => {
  const calcInput = document.querySelector('.calc__input');
  if (calcInput.value === '0') {
    calcInput.value = '1';
  } else {
    calcInput.value += '1';
  }
};

const showTwo = () => {
  const calcInput = document.querySelector('.calc__input');
  if (calcInput.value === '0') {
    calcInput.value = '2';
  } else {
    calcInput.value += 2;
  }
};

const showThree = () => {
  const calcInput = document.querySelector('.calc__input');
  if (calcInput.value === '0') {
    calcInput.value = '3';
  } else {
    calcInput.value += '3';
  }
};

const showFour = () => {
  const calcInput = document.querySelector('.calc__input');
  if (calcInput.value === '0') {
    calcInput.value = '4';
  } else {
    calcInput.value += '4';
  }
};

const showFive = () => {
  const calcInput = document.querySelector('.calc__input');
  if (calcInput.value === '0') {
    calcInput.value = '5';
  } else {
    calcInput.value += '5';
  }
};

const showSix = () => {
  const calcInput = document.querySelector('.calc__input');
  if (calcInput.value === '0') {
    calcInput.value = '6';
  } else {
    calcInput.value += '6';
  }
};

const showSeven = () => {
  const calcInput = document.querySelector('.calc__input');
  if (calcInput.value === '0') {
    calcInput.value = '7';
  } else {
    calcInput.value += '7';
  }
};

const showEight = () => {
  const calcInput = document.querySelector('.calc__input');
  if (calcInput.value === '0') {
    calcInput.value = '8';
  } else {
    calcInput.value += '8';
  }
};
const showNine = () => {
  const calcInput = document.querySelector('.calc__input');
  if (calcInput.value === '0') {
    calcInput.value = '9';
  } else {
    calcInput.value += '9';
  }
};

document.addEventListener('DOMContentLoaded', () => {
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

  const point = document.querySelector('#btn-point');
  point.addEventListener('click', pointEvent);
});
