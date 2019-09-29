/* click  */
const showZero = () => {
  const calcInput = document.querySelector('#current-operand');
  if (calcInput.value === '0') {
    calcInput.value = '0';
  } else {
    calcInput.value += '0';
  }
};

const showOne = () => {
  const calcInput = document.querySelector('#current-operand');
  if (calcInput.value === '0') {
    calcInput.value = '1';
  } else {
    calcInput.value += '1';
  }
};

const showTwo = () => {
  const calcInput = document.querySelector('#current-operand');
  if (calcInput.value === '0') {
    calcInput.value = '2';
  } else {
    calcInput.value += '2';
  }
};

const showThree = () => {
  const calcInput = document.querySelector('#current-operand');
  if (calcInput.value === '0') {
    calcInput.value = '3';
  } else {
    calcInput.value += '3';
  }
};

const showFour = () => {
  const calcInput = document.querySelector('#current-operand');
  if (calcInput.value === '0') {
    calcInput.value = '4';
  } else {
    calcInput.value += '4';
  }
};

const showFive = () => {
  const calcInput = document.querySelector('#current-operand');
  if (calcInput.value === '0') {
    calcInput.value = '5';
  } else {
    calcInput.value += '5';
  }
};

const showSix = () => {
  const calcInput = document.querySelector('#current-operand');
  if (calcInput.value === '0') {
    calcInput.value = '6';
  } else {
    calcInput.value += '6';
  }
};

const showSeven = () => {
  const calcInput = document.querySelector('#current-operand');
  if (calcInput.value === '0') {
    calcInput.value = '7';
  } else {
    calcInput.value += '7';
  }
};

const showEight = () => {
  const calcInput = document.querySelector('#current-operand');
  if (calcInput.value === '0') {
    calcInput.value = '8';
  } else {
    calcInput.value += '8';
  }
};
const showNine = () => {
  const calcInput = document.querySelector('#current-operand');
  if (calcInput.value === '0') {
    calcInput.value = '9';
  } else {
    calcInput.value += '9';
  }
};
document.addEventListener('DOMContentLoaded', () => {
  const zero = document.querySelector('#btn-zero');
  zero.addEventListener('click', showZero);

  const one = document.querySelector('#btn-one');
  one.addEventListener('click', showOne);

  const two = document.querySelector('#btn-two');
  two.addEventListener('click', showTwo);

  const three = document.querySelector('#btn-three');
  three.addEventListener('click', showThree);

  const four = document.querySelector('#btn-four');
  four.addEventListener('click', showFour);

  const five = document.querySelector('#btn-five');
  five.addEventListener('click', showFive);

  const six = document.querySelector('#btn-six');
  six.addEventListener('click', showSix);

  const seven = document.querySelector('#btn-seven');
  seven.addEventListener('click', showSeven);

  const eight = document.querySelector('#btn-eight');
  eight.addEventListener('click', showEight);

  const nine = document.querySelector('#btn-nine');
  nine.addEventListener('click', showNine);
});
