import React from "react"
import Product from "./Product.jsx"
import productsData from "./vschoolProducts.jsx"

function App() {
    const productComponents = productsData.map(item => <Product key={item.id} product={item}/>)
    
  return (
    <div>
       {productComponents}
    </div>
  )
}

export default App