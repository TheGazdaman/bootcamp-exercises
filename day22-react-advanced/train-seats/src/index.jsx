import React from 'react';
import ReactDOM from 'react-dom';

import Carriage from './Carriage.jsx';
import './index.scss';
import './index.html';

class App extends React.Component {
  render() {
    return (
      <>
        <Carriage 
        row = {0}
        availability = "fff" />
        
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
