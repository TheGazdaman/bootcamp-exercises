import React from 'react';

export default class App extends React.Component {
  constructor() {
    super()

    const grid = [
      [ null, null],
      [ null, null],
      [ null, null],
      [ null, null],
    ]

    const letters = [ 'A', 'B', 'C', 'D']; 

    let counts = { 'A': 0, 'B': 0, 'C': 0, 'D': 0 }; 

    for (let i = 0; i < 4; i++ ) {
      for (let j = 0; j < 2; j++) {
        
        let letter;

        do {
          letter = letters[Math.floor(Math.random() * letters.length)];
        } while (counts[letter] == 2);


        
        grid[ i ][ j ] = letter;
        counts[ letter ]++;
      }
    }

    this.state = {
      grid: grid
    }
  }
  
 

  render() {

    return (
      <>
      <div style={{width: '100vw', height: '100vh', display:'flex', background:'lightblue'}}>
        <div style={{ width: '60vw', height: '60vw', margin: '20px' }}>
          
              {this.state.grid.map(row => 
                  <div style={{ width: '10vw', height: '10vw' }}>
                      {row.map(card => card)}</div>
              )}</div>
              </div>
      </>
    )
  }
}