import React from 'react';

export default class Square extends React.Component {
  constructor() {
    super();
    this.state = {
      value: null,
    };
  }

  render() {
    return (
      <div className="square" onClick={() => this.setState({value: 'X'})}>
        {this.state.value}
      </div>
    );
  }
}