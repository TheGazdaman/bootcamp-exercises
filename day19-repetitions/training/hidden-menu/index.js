
document.addEventListener('DOMContentLoaded', () => {
  
  const side = document.querySelector('#side');
  side.addEventListener('mouseenter', () => {
    
    const show = document.querySelector('#side');
    show.classList.toggle('side--menu--modifier');
  });

    const hide = document.querySelector('#side');
    hide.addEventListener('mouseleave', () => {
      hide.classList.toggle('side--menu--modifier');
    })  


})