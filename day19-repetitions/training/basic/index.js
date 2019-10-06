

/* const age = prompt('Enter your age:');
parseInt(age);
document.write('Your age is: ' + age); */

/* const hour = prompt('Enter you hours a day: ');
parseInt(hour);
const day = prompt('Enter your working days per month: ');
parseInt(day);
const wage = prompt('Enter your wage per hour: ');
parseInt(day);

const taxation = prompt('Enter taxation:  %');
parseInt(taxation);
const salary = hour * day * wage * ((100 - taxation)/100);

document.write('Your salary is: ' + salary);  */

/* const classHours = (4*7*12) + (12*3);
const studyHours = classHours * (30/100);

const totalStudyTime = classHours + studyHours;

const studyMessage = document.write('Total study time: ' + totalStudyTime); */

/* const mile = 1.609344;
const mph = 60;
const kph = mile * mph;

document.write(kph); */

/* const dice = (Math.floor(Math.random()*12)+1);

console.log(dice); */


/* let days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]



console.log(days.unshift(32));

console.log(days); */

/* let year = prompt('In what year were you born?');
parseInt(year);
let age = 2019 - year;

document.write('You are probably ' + age + ' years old.') */

/* let hours = [10, 12, 12, 13, 10, 10, 8];

console.log(hours[6]); */

/* let days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'];

days.push('saturday', 'sunday');

console.log(days[0]);
console.log(days[2]);
console.log(days[5]); */

/* let card = ['ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'jack', 'queen', 'king'];

let suit = ['hearts', 'spades', 'clubs', 'diamonds'];

let randomCard = card[(Math.floor(Math.random()*12)+1)];
let randomSuit = suit[(Math.floor(Math.random()*3)+1)];

document.write(randomCard);
document.write(randomSuit); */


/* let max = prompt('tell me your max limit');
parseInt(max);
let min = prompt('tell me your min limit');
parseInt(min);

let randomNmr = Math.floor(Math.random()* (max - min) + parseInt(min));

document.write(randomNmr); */

/* const randint = (lower, upper) => {
  let distance = upper - lower + 1;
  return Math.floor(Math.random() * distance) + lower;
}

let result = randint (1,6); */

/* const trianglArea = (width, height) => {
  return width + height / 2;
}

console.log(trianglArea(3,5)); */

/* const square = a => a * a;
const hypotenuse = (a, b) => {
  return Math.sqrt(square(a) + square(b));
} */

// Math.sqrt = je druhá ODMOCNINA

/* const namesArr = ['Petr', 'Michal', 'Honza', 'Sam'];
const passArr = ['Bisof', 'Gazdik', 'Jirsik', 'Judge'];

const access = document.querySelector('#access');

const login = document.querySelector('#username');
const heslo = document.querySelector('#password');

const verify = () => {
if (login.value === namesArr.value && heslo.value === passArr.value) { 
  access.innerHTML += "GRANTED";
  
} 
else {
  access.innerHTML += "DENIED";
}
}

document.addEventListener('DOMContentLoaded', () => {
const btn = document.querySelector('#btn-login');
btn.addEventListener('click', verify);
}) */

/* document.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.menu');
  menu.addEventListener('mouseenter', () => {
    const nav = document.querySelector('.menu')
    nav.classList.toggle('menu--modifier');
  })
  const text = document.querySelector('.menu');
  text.addEventListener('mouseleave', () => {
    const nav = document.querySelector('.text')
    nav.classList.toggle('menu');
})
}) */

document.addEventListener('DOMContentLoaded', () => {
  const icon = document.querySelector('.icon');
  icon.addEventListener('mouseenter', () => {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('.menu--modifier');
  })
})