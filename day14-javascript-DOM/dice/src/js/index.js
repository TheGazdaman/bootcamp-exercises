
// eslint-disable-next-line prefer-const
let roll = () => Math.floor(Math.random() * (6) + 1); // pokud bych tam chtěl mít chlupaté závorky - aby mi to vracelo vygenerované náhodné číslo.

const updateFace = (faceValue) => {
  const dice = document.querySelector('#dice');
  dice.src = `img/side${faceValue}.png`; // in faceValue could be whatever word - we write it there in order to be comprehensible. Notice the `apostrophe` -> different value would not be possible.
};

document.addEventListener('DOMContentLoaded', () => {
  updateFace(roll());
  const dice = document.querySelector('#btn-roll');
  dice.addEventListener('click', () => {
    updateFace(roll());

    /*  toto negeneruje náhodná čísla  => if (side < 6) { // if the side is smaller than 6 adds 1
      side++;
    } else {
      side = 1; // if the side after add 1 is 1
    } */
  });
});


const rolle = () => Math.floor(Math.random() * (6) + 1);

const updateImg = (faceValue) => {
  const dice = document.querySelector('#dice1');
  dice.src = `img/side${faceValue}.png`;
};
document.addEventListener('DOMContentLoaded', () => {
  updateImg(rolle());
  const dice = document.querySelector('#btn-roll');
  dice.addEventListener('click', () => {
    updateImg(rolle());
  });
});

const rolling = () => Math.floor(Math.random() * (6) + 1);

const updateAce = (faceValue) => {
  const dice = document.querySelector('#dice2');
  dice.src = `img/side${faceValue}.png`;
};
document.addEventListener('DOMContentLoaded', () => {
  updateAce(rolling());
  const dice = document.querySelector('#btn-roll');
  dice.addEventListener('click', () => {
    updateAce(rolle());
  });
});
