const roll = () => (Math.floor(Math.random() * 6) + 1);


const updateFace = (newFace) => {
  const dice = document.querySelector('#dice');
  dice.src = `img/side${newFace}.png`;
};

document.addEventListener('DOMContentLoaded', () => {
  const round = document.querySelector('#dice');
  round.addEventListener('click', () => updateFace(roll()));
});
