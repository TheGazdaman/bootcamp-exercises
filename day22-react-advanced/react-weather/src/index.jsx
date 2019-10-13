import React from 'react';
import ReactDOM from 'react-dom';
import Week from './Week/Week.jsx';

import './index.html';
import './index.scss';

class App extends React.Component {
  render () {
    return (
      <>
      <h1>Weekly Weather Forecast</h1>
      <Week />
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));