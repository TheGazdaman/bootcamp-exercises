import React from 'react';
import ReactDOM from 'react-dom';

import Contact from './contact/contact.jsx';
import './index.scss';
import './index.html';

const contacts = [
  {
    firstName: 'Homer',
    lastName: 'Simpson',
    email: 'homer@springmail.com',
    address: 'Springfield 365',
  },
  {
    firstName: 'Marge',
    lastName: 'Simpson',
    email: 'marge@springmail.com',
    address: 'Springfield 365',
  },
  {
    firstName: 'Abe',
    lastName: 'Simpson',
    email: 'abe@springmail.com',
    address: 'Springfield 365',
  },
];

class App extends React.Component {
  render() {
    return (
      <>
        {
          contacts.map(contact => (
            <Contact 
              firstName={contact.firstName} 
              lastName={contact.lastName}
              email={contact.email} 
              address={contact.address}
            />
          ))
        }
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
