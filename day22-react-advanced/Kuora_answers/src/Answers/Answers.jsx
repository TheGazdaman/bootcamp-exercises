import React from 'react';

import './Answers.scss';

export default class Answers extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: null,
    }
  }

  handleClick = () => {
    this.setState({counter : this.state.counter += 1}); 
    console.log(this.state.counter);
  }

  render() {
    return (
      <div className="answer">
        <div className="answer__user">
          { this.props.user } 
        </div>
        <div className="answer__text">{this.props.text}</div>
        <button onClick={this.handleClick}>NOlike</button>
        <div>{this.state.counter}</div>
      </div>
    )
  }
}