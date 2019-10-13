/* const fruits = ['apple', 'pear', 'banana', 'orange', 'mango'];

for (const fruit of fruits) {
console.log(`${fruit} is good for you`); 
};

fruits.forEach((fruit) => {
  console.log(`${fruit} is good for you`); 
});

for (let i = 0; i < fruits.length; i++) {
  console.log(`${fruits[i]} is good for you`);
} */


const grocery = [
  {name:'apples', amount: '1kg'},
  {name: 'pears', amount: '3kg'},
  {name: 'bananas', amount: '2kg'},
  {name: 'appricot', amount: '4kg'},
  {name: 'pineapple', amount: '1pcs'},
  {name: 'milk', amount: '1l'},
  {name: 'bread', amount: '1pcs'}
];

document.addEventListener('DOMContentLoaded', () => {
  const listElm = document.querySelector('#list');

  for (const item of grocery) {
    const btnCheck = document.createElement('div');
    btnCheck.className = `btn-checked`;
    btnCheck.innerHTML = (
      `<div class="shopping-list__item">
          <span>${item.name}</span>
          <span>${item.amount}</span>
          <input class="btn-checked" type="checkbox">
        </div>`
    );

    btnCheck.querySelector('.btn-checked').addEventListener('click', (event) => {
      if (item.checked) {
        item.checked = false;;
      } else {
        item.checked = true;
      }
      console.log(item);
    })

    listElm.appendChild(btnCheck);
  }
});


