console.log('it works');

document.addEventListener('DOMContentLoaded', () => {
  document.body.addEventListener('click', () => {
    const box = document.querySelector('.box');
    box.classList.toggle('box--modifier');
  });
});