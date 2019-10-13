import React from 'react';
import ReactDOM from 'react-dom';

import Answer from './Answers/Answers.jsx';
import './index.html';
import './index.scss';

const answers = [
  { 
    user: 'baked_turtle', 
    text: 'Your question is stupid.' 
  },
  { 
    user: 'naked_eye', 
    text: 'Chill out, man!' 
  },
  { 
    user: 'faked_icecream', 
    text: 'Holy Moly!' 
  },
];

class App extends React.Component {
  
  render () {
    return (
      <>
          {
            answers.map(answer => (
            <Answer 
            user={answer.user}
            text={answer.text}
            />
            ))
          }
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));