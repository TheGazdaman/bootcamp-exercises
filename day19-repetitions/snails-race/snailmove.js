let snail = '';
let speed = 40;
let position = 0;
const raceStart = document.querySelector('.snail-racer');

document.addEventListener('DOMContentLoaded', ()=> {


  const moving = () => {
    const moveSnail = document.querySelector('.snail-racer');
    moveSnail.style.marginLeft = `${speed}px`;
    speed++;
  }
  
  raceStart.addEventListener('click', () => {
   
    setInterval(moving , 4);
   })
});

