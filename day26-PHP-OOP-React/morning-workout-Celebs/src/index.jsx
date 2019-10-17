import React from 'react';
import ReactDOM from 'react-dom';
import Celebrities from './Celebrities/Celebrities.jsx';

import './index.scss';
import './index.html';

class App extends React.Component {
  render() {
    return (
      <>
        <Celebrities 
          url="http://www.cbp-exercises.test:8080/day26-PHP-OOP-React/API-morning-workout/indexx.php"
        />
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
