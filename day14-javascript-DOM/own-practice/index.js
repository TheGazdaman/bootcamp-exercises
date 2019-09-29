/* const square = (x) => {
  return x**2;
}

const hypotenuse = (a, b) => {
  return Math.sqrt(square(a) + square(b));
}  */

/* const day = prompt('How many days a month do you work?');
const hour = prompt('How many hours a day do you work?');
const wage = prompt('What is your wage per hour?');
const tax = prompt ('What is your taxation?'); */

const day = document.querySelector('#day');
const hour = document.querySelector('#hour');
const wage = document.querySelector('#wage');
const tax = document.querySelector('#tax');

const salary = Number(day) * Number(hour) * Number(wage) * (1 - tax/100);

/* document.write('You salary is: '+ salary); */


const btn = document.querySelector('#btn-count');
btn.addEventListener('click', salary);

document.write(salary);