import React from 'react'
import Product from './Product.jsx';
import Data from './Data.jsx';


export default class ProductList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: Data
    }

  }

  render() {
    return(
      <div className="product-list">
        {
          this.state.products.map(product => (
              <Product key={ product.id } {...product}/>
          ))
        }
        
      </div>
    ) 
  }
}