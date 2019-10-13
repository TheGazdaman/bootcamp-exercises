const ticket = 12;
const age = document.querySelector('#age');
const price = document.querySelector('.price');

const getMyPrice = () => {
  if (age.value <= 6) {
    price.innerHTML += 0;
  } if (age.value > 6 && age.value <= 15) {
    price.innerHTML += (12*0.35 + '€');
  } if (age.value > 15 && age.value <= 26) {
    price.innerHTML += (12*0.65 + '€');
  } if (age.value > 26 && age.value <= 64) {
    price.innerHTML += (12 + '€');
  } else {
    price.innerHTML += (12*0.5 + '€');
  }
}

const btn = document.querySelector('#btn');
btn.addEventListener('click', getMyPrice);