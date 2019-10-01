// creating HTML items for each individual items in the list;

const shoppingList = [
  {name: 'apples', amount: '1kg'},
  {name: 'bacon', amount: '200g'},
  {name: 'cheddar', amount: '250g'},
  {name: 'beer', amount: '6'},
  {name: 'icecream', amount: '1kg'},

];


document.addEventListener('DOMContentLoaded', () => {
  const listElm = document.querySelector('.shopping-list');

  for (const item of shoppingList) {
    const html = (
      `<div class="shopping-list__item">
        <span>${item.name}</span>
        <span>${item.amount}</span>
      </div>`
    );
    listElm.innerHTML += html;
   
  }
});