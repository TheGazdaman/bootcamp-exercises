const numberButtons = document.querySelectorAll('[data-number]');
const numberOperations = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const allClearButton = document.querySelector('[data-all-clear]');

const previousOperandTextElement = document.querySelector('[data-previous-operand]');
const currentOperandTextElement = document.querySelector('[data-current-operand]');

class Calculator {
  constructor(previousOperandTextElement, currentOperandTextElement) {
    this.previousOperandTextElement = previousOperandTextElement;
    this.currentOperandTextElement = currentOperandTextElement;
    this.clear();
  }

  clear() {
    this.currentOperandTextElement = '0';
    this.previousOperandTextElement = '0';
    this.operation = undefined;
  }

  update() {

  }

  appendNumber(number) {

  }

  chooseOperation(operation) {

  }

  compute() {

  }

  updateDisplay() {

  }
}


const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement);

numberButtons.forEach((button) => {
  button.addEventListener('click', () => {
    calculator.appendNumber(button.innerHTML);
  });
});