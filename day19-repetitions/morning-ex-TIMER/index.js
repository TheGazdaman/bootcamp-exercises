let seconds = 10;

document.addEventListener('DOMContentLoaded', () => {
 
  const updateCounter = () => {
    const myTimer = document.querySelector('#counter');
    myTimer.textContent = `${seconds}`;
  }

  const btnUp = document.querySelector('.arrow-up');
  btnUp.addEventListener('click', () => {

    if (seconds < 60) {
      seconds++;
      updateCounter();
    }
  })

  const btnDown = document.querySelector('.arrow-down');
  btnDown.addEventListener('click', () => {

    if (seconds > 0) {
        seconds--;
        updateCounter();
    }
  })
})

    
  

