let seconds = 30;
let intervalID = null;
const btnUp = document.querySelector('.arrow-up');
const btnDown = document.querySelector('.arrow-down');
const btnStart = document.querySelector('.btn-start-stop');
const btnReset = document.querySelector('.btn-reset');

document.addEventListener('DOMContentLoaded', () => {
 
  const updateCounter = () => {
    const myTimer = document.querySelector('#counter');
    myTimer.textContent = `${seconds}`;
  }

  const runTimer = () => {
    if (seconds < 60) {
      seconds--;
      updateCounter();
    }
  }

  btnUp.addEventListener('click', () => {

    if (seconds < 60) {
      seconds++;
      updateCounter();
    }
  })

  btnDown.addEventListener('click', () => {

    if (seconds > 0) {
        seconds--;
        updateCounter();
    }
  })

  btnStart.addEventListener('click', () => {
    if (intervalID === null) {
      intervalID = setInterval(runTimer, 1000);
    } else {
      clearInterval(intervalID);
      intervalID = null;
    }
    })

  btnReset.addEventListener('click', () => {
    const clear = document.querySelector('#counter');
    seconds = 30; 
    clear.textContent = 30;
    clearInterval(intervalID);   
  })
  })

  
  

