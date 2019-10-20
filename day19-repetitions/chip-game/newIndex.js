class Chip {
  constructor (value, color, x, y) {
    this.value = value;
    this.color = color;
    this.x = x;
    this.y = y; 
  }

  render(chip) {
    const board = document.querySelector('.board');
    const coin = document.createElement('div');
    coin.innerHTML = `<div class="chip" style="left: ${chip.x}px; top: ${chip.y}px; background: ${chip.color}">${chip.value}</div>`;
    coin.querySelector('div').addEventListener('click', () => {
      round.score += chip.value;
      round.remaining--;
      document.querySelector('.score').textContent = `${round.score}`;
      coin.querySelector('div').className = 'none';
    });
    
    setTimeout(()=> {
      coin.querySelector('div').className = 'none';
      round.remaining--;
    }, letT());
    
    board.appendChild(coin);
  }
}

class Game {
  constructor() {
    this.score = 0;
    this.chips = [];
    this.remaining = this.chips.length;
  }

  addChip (value, x, y) {
    const newChip = new Chip (value, x, y);
    this.chips.push(newChip);
    newChip.render(newChip);
  }
}

let round;

const letX = () => Math.floor(Math.random() * 700);
const letY = () => Math.floor(Math.random() * 390);
const letV = () => Math.floor(Math.random() * 3) +1;
const letC = () => `rgb(${Math.floor(Math.random()* 255)}, ${Math.floor(Math.random()* 255)}, ${Math.floor(Math.random()* 255)})`

const letT = () => Math.floor(Math.random() * 4000) + 1000;

const gameOn = (numberOfcoins) => {
    round = new Game();
    for (i=0; i<numberOfcoins; i++) {
      round.addChip(letV(), letC(), letX(), letY());
      round.remaining++;
    }
    
    timer = setInterval(() => {
      round.addChip(letV(), letC(), letX(), letY());
      round.remaining++;
    }, 400);
    
    setTimeout(()=> {
      clearInterval(timer)
      alert('Game over');
    }, 20000);
};

document.addEventListener('DOMContentLoaded', () => {
  gameOn(10);
});
