import React, { useState } from "react";

const App = props => {

  const [formInputValues, setFormInputValues] = useState({name: '', email: '', password:'' })
  const [formSubmitSuccess, setFormSubmitSuccess] = useState()

  const handleNameInputChange = e =>{
    setFormInputValues({
      ...formInputValues,
      [e.target.id]: e.target.value
    })
  }

  const handleButtonClick = (e) => {
    e.preventDefault()
    console.log('click', formInputValues)
    fetch('https://nemadywgu6.execute-api.us-west-2.amazonaws.com/prod/')
    .then(()=>{
      setFormSubmitSuccess(true)
    })
    .catch((e)=> {
      setFormSubmitSuccess(false)
    })
  }

  return (
    <form style={{ display: 'flex', flexDirection: 'column'}}>
      <input style={{border: '1px solid black', margin: '10px'}}
        id="name"
        type="text"
        value={formInputValues.name}
        onChange={handleNameInputChange}
        />
      <input style={{border: '1px solid black', margin: '10px'}}
        id="email"
        name="email"
        value={formInputValues.email}
        onChange={handleNameInputChange}
        />
      <input style={{border: '1px solid black', margin: '10px'}}
        id="password"
        name="password"
        value={formInputValues.password}
        onChange={handleNameInputChange}
        />
      <button style={{border: '1px solid black', margin: '10px'}} onClick={handleButtonClick}>Submit</button>
      {formSubmitSuccess === true && <h3>Congratulations!</h3>}
      {formSubmitSuccess === false && <h3>Operation failed!</h3>}
    </form>
    )
  }



export default App;
