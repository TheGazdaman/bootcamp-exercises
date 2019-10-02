document.addEventListener('DOMContentLoaded', ()=> {
  
  const min = document.querySelector('#counter');
  const max = document.querySelector('#maximum');
  const updateCounter = () => {
    const knob = document.querySelector('#knob');
    knob.style.width = `${(parseInt(min.textContent)/(parseInt(max.textContent))*100)}%`;
  }

  const btbPlus = document.querySelector('#plus');
  btbPlus.addEventListener('click', ()=> {
    
    const increase = document.querySelector('#counter');
    if (increase.textContent < 10) {
    increase.textContent++;
    updateCounter();
    }
  })
  
  const btnMinus = document.querySelector('#minus');
  btnMinus.addEventListener('click', () => {
    const decrease = document.querySelector('#counter');
    if (decrease.textContent > 0) {
      decrease.textContent--;
      updateCounter();
    }
  })
})