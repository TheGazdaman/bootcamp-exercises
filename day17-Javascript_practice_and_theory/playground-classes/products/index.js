class Product {
  constructor (name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }

  sell () {
    return this.quantity -1;
  } 
  store () {
    return this.quantity + 1;
  } 

}

const productList = [
  new Product('TV', 350, 100),
  new Product('Stereo', 200, 50),
  new Product('Mobile', 300, 200),
  new Product('Speaker', 249, 80),
  new Product('Laptop', 999, 30),
  new Product('Headphones', 99, 120),
  new Product('Tablet', 500, 50),
];


document.addEventListener('DOMContentLoaded', () => {
  const stock = document.querySelector('#stock');

  for (const item of productList) {
    stock.innerHTML += (
      `<div class="product__item">
        <span>${item.name}</span>
        <span>${item.price}</span>
        <span>${item.quantity}</span>
      </div>`
    );

    stock.innerHTML += html;
  }
})


<div><h1>Products on stock</h1></div>
  <div id="stock" class="product">
    
  </div>

























