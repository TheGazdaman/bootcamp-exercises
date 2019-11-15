import React, { useState } from "react";

const formStyle = { display: "flex", flexDirection: "column", height: '300px', width:  '300px', alignItems: 'space-between'}
const divStyle = { display: "flex", width:  '300px', justifyContent: 'space-between' }
const buttonStyle = { border: '1px solid blue', margin: '5px'}


const App = props => {
  // Declare the proper variables for state using useState
  const [formInputValues, setFormInputValues ] = useState({ email:'', password: '' });
  const [formSubmitSuccess, setFormSubmitSuccess] = useState();

  // Make the inputs 'controlled input' using the function below
  const handleTextValueChange = e => {
    setFormInputValues({
      ...formInputValues,
      [e.target.id]: e.target.value
    })
  };

  const handleSubmitClick = (e) => {
    e.preventDefault()
    console.log('click', formInputValues)
    // When the submit button is clicked, submit a POST request to the above URL
    fetch('https://nemadywgu6.execute-api.us-west-2.amazonaws.com/prod', {
              method: 'POST',
              headers: {
                  'Accept':       'application/json',
                  'Content-type': 'application/json',
                  //'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
              },

              body: JSON.stringify({
                "email": formInputValues.email,
                "password": formInputValues.password,
                  })
                })

                .then(res => res.json())
                .then( data => console.log('data', data ))
                  .catch(err => {
                    console.log('err', err);
                  })
       
    // It will always return an error
    
    // Find the error message in the returned body and add the error message to the bottom of the form
  }

  return (
    <form style={formStyle}>
      <div style={divStyle}>
        <p>Email</p>
        <input
          type="email"
          id="email"
          value={formInputValues.email}
          onChange={handleTextValueChange}
        />
      </div>
      <div style={divStyle}>
        <p>Password</p>
        <input
          type="password"
          id="password"
          value={formInputValues.password}
          onChange={handleTextValueChange}
        />
      </div>
      <button style={buttonStyle} onClick={handleSubmitClick}>Submit</button>
          {formSubmitSuccess === true && <h3>You are logged in!</h3>}
          {formSubmitSuccess === false && <h3>Wrong input!</h3>}
    </form>
  );
};

export default App;