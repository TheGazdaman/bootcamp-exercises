import React from 'react'


export default class Product extends React.Component {
  constructor(props) {
    super(props)
   
  }

  render() {
    return(

      <div className="product">
        <img src= { this.props.img_url } alt=""/>
        <div className="name">{ this.props.name }</div>
      </div>

    )  
  }
}