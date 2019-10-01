/*
const myMove = () => {
  const elem = document.querySelector('#animation');
  let position = 0;
  const id = setInterval(frame, 10);

  const frame = () => {
    if (position == 350) {
      clearInterval(id);
    } else {
      position++; elem.style.top = `${position}px`; elem.style.left = `${position}px`;
    }
  };
};

document.querySelector('DOMContentLoaded', () => {
  const button = document.querySelector('#btn');
  button.addEventListener('click', myMove);
});
 */

function even_or_odd(number) {
  // ...
  if (number % 2 === 1) {
    return 'odd';
  } else 
    return 'even'
; }
}

console.log(even_or_odd(4));
