
const showText = () => {
  document.querySelector('#padlock');
  article.style.opacity = 0;
}

const hideText = () => {
  document.querySelector('#padlock');
  article.style.opacity = 1;
}


document.addEventListener('DOMContentLoaded', () => {
  const hover = document.getElementById('padlock');
  hover.addEventListener('mouseenter', showText);
  hover.addEventListener('mouseleave', hideText)
});