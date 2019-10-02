let value = 4;

const updateCounter = () => {
  const counter = document.querySelector('#counter');
  counter.textContent = `${value}`;
  const knob = document.querySelector('#knob');
  knob.style.width = `${value * 10}%`;
}

document.addEventListener('DOMContentLoaded', () => {
  updateCounter();

  const plusBtn = document.querySelector('#plus');
  plusBtn.addEventListener('click', () => {
    if (value < 10) {
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