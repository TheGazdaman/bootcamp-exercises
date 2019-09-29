
const showText = () => {
  const article = document.querySelector('#showedText');
  article.style.opacity = '1';
};

const hideText = () => {
  const article = document.querySelector('#showedText');
  article.style.opacity = '0';
};


document.addEventListener('DOMContentLoaded', () => {
  const hoverMouse = document.querySelector('#mouseTarget');
  hoverMouse.addEventListener('mouseenter', showText);
  hoverMouse.addEventListener('mouseleave', hideText);
});
