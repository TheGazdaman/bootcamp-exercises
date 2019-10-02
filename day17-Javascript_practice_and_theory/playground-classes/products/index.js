class Product {
  constructor (name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }

  sell(amount) {
    this.quantity -= 1;
    }

  store(amount) {
    this.quantity += 1;
    }

}

const products = [
  new Product('TV', 350, 100, 100),
  new Product('Stereo', 200, 50),
  new Product('Mobile', 300, 200),
  new Product('Speaker', 249, 80),
  new Product('Laptop', 999, 30),
  new Product('Headphones', 99, 120),
  new Product('Tablet', 500, 50),
];

document.addEventListener('DOMContentLoaded', () => {
  const list = document.querySelector('.product-list');

  for (const product of products) {
    const productElement = document.createElement('div');
    productElement.classList.add('container');
    productElement.innerHTML = (
        `
        <div class="product-name">Name: ${product.name}</div>
        <div class="product-price">Price: ${product.price}</div>
        <div class="product-quantity">Quantity: ${product.quantity}</div>
        <button class="btn-buy">Sold</button>
        <button class="btn-store">Store</button>
      `
    );
     const btnBuy = productElement.querySelector('.btn-buy');                // asigning HTML button class to a constant btnBuy
     const quantity = productElement.querySelector('.product-quantity');   // asigning HTML query selector "quantity" to class product-quan
      
     btnBuy.addEventListener('click', () => {                             // btnBuy was asigned eventListener
       product.sell();                                                          // everytime btnBuy is clicked it calls clicked product and function sell, which is quantity -= 1;
       quantity.textContent = `On stock: ${product.quantity}`;            // Quantity text content tells us how many products we have left

     }); 

     const btnStore = productElement.querySelector('.btn-store');               // asigning HTML button class to a constant btnStore
     const amount = productElement.querySelector('.product-quantity');
      
     btnStore.addEventListener('click', () => {
       product.store();
       amount.textContent = `On stock: ${product.quantity}`;        // Quantity text content tells us how many products we have left
      
    }); 

    list.appendChild(productElement);
  }
});




























