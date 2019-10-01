

document.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('#menu'); // defining variable into which we are saving DOM element.
  menu.addEventListener('mouseenter', () => { // defining event and adding listener on which the function should be executed
    const box = document.querySelector('#list'); 
    box.classList.toggle('list--modifier'); // toggle = přepnout
  });
    menu.addEventListener('mouseleave', () => {
      const box = document.querySelector('#list');
      box.classList.toggle('list--modifier');
    });
  
});