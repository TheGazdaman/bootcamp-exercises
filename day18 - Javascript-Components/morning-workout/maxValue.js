
let value = 4;
const maxValue = 20;

const updateCounter = () => {
  const counter = document.querySelector('#counter');
  counter.textContent = `${value}`;
  const maximum = document.querySelector('#maximum');
  maximum.textContent = `${maxValue}`;
  const knob = document.querySelector('#knob');
  const step = 100 / maxValue;    // this is how we are able to adjust width which fits our max value accordingly. 
  knob.style.width = `${value * step}%`;
}

document.addEventListener('DOMContentLoaded', () => {
  updateCounter();

  const plusBtn = document.querySelector('#plus');
  plusBtn.addEventListener('click', () => {
    if (value < maxValue) {
    value++;
    updateCounter();
    }
  })

  const minusBtn = document.querySelector('#minus');
  minusBtn.addEventListener('click', ()=> {
    if (value > 0) {
      value--;
      updateCounter();
    }
  }
  )
});