import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App.jsx'
import './index.scss';
import './index.html';

class Index extends React.Component {
  render() {
    return (
      <App />
    );
  }
}

ReactDOM.render(<Index />, document.getElementById('root'));
