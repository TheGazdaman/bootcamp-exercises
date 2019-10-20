


const board = document.querySelector('.board');
const score = document.querySelector('.score');
const start = document.querySelector('.btn-start');



const genChip = () => {
  const chip = document.querySelector('.chip');
  chip.style.display = 'none';
  
    
};


const btn_chip = document.querySelector('.btn-chip');
btn_chip.addEventListener('click', genChip);

