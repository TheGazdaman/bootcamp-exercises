import React from 'react';
import Square from './Square.jsx';


export default class Board extends React.Component {
  constructor() {
    super()
    this.state = {
      squares: Array(9).fill(null),
      player: this.setState === 1 ? 2 : 1

    }  
    this.renderSquare = this.renderSquare.bind(this)
  }

  renderSquare(i) {
      return <Square value={i} />;
  }
  
  render() {
    return(
      <>
      <h1>Awesome-O 4000</h1>
      <div>
        <h1>Turn player nr. {this.state.player}</h1>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
      </> 
    )
  }
}