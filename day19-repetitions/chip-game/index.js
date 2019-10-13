
class Chip {
  constructor() {
    this.score = 0;
    this.color = `rgb(${Math.floor(Math.random()* 255)}, ${Math.floor(Math.random()* 255)}, ${Math.floor(Math.random()* 255)})`;
    this.positionTop = `${Math.floor(Math.random() * 90)}%`;
    this.positionLeft = `${Math.floor(Math.random() * 90)}%`
  }

  render() {
    const chipValue = Math.floor(Math.random()*3);
    this.chip = document.createElement('div');
    this.chip.className = 'chip';
    this.chip.style.backgroundColor = this.color;
    this.chip.style.positionLeft = this.positionLeft;
    this.chip.style.positionTop = this.positionTop;
    this.chip.addEventListener('click', () => {
      this.chip.style.display = 'none';
      this.score += chipValue;
    })

    this.chip.innerHTML(
      `<p>${chipValue}</p>`
    );
  }

  mount(parent) {
    this.render();
    parent.appendChild(this.chip);
    this.updateScore();
  }
  updateScore() {
    const gameScore = document.querySelector('.score');
    gameScore.textContent = this.score;
  }

}

document.addEventListener('DOMContentLoaded', () => {

  const arena = document.querySelector('#board');
  const coin = new Chip();
  coin.mount(arena);

  const newChip = document.querySelector('.btn-chip');
  newChip.addEventListener('click', () => {
    const newChip = document.querySelector('#board');
    const coin = new Chip();
    coin.mount(newChip);
  });
});

