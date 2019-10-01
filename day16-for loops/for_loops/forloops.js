const fruits = ['apple', 'tomato', 'pear', 'peach', 'banana'];
const nums = [5, 6, 7, 7, 9, 9, 33,];

for (const fruit of fruits) {

console.log(`${fruit} is good for you`);

};

fruits.forEach(fruit => {
  console.log(`${fruit} is good for you.`);
})

for (let i = 0; i < fruits.length; i++) {
  console.log(`${fruits[i]} is good for you.`);
}


for (let i = 0; i < fruits.length - 2; i++) {   // vynechá poslední dva
  console.log(`${fruits[i]} is good for you.`);
}

for (let i = 0; i < fruits.length; i+=2) {  // přeskočí každý druhý
  console.log(`${fruits[i]} is good for you.`);
}

for (let i = 2; i < fruits.length; i++) {  // začne od třetího elementu
  console.log(`${fruits[i]} is good for you.`);
}

for (let i = fruits.length; í >= 0; i-- ) {     // jede po zpátku
  console.log(`${fruits[i]} is good for you.`);
}