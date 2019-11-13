import React, { useState } from "react";

const Box = props => {
  // create your form input values and setter with useState
  const [formValues, setFormValues] = useState({ name: '', email: '', checkbox: false })
  // create a handler function that updates the values
  const handleTextValueChange = (e) => {
    const val = e.target.value
    const id = e.target.id
    setFormValues(prevValues => {
      return {
        ...prevValues,
        [id]: val
      }
    })
  }
  const handleCheckBoxValueChange = (e) => {
    // remember the spread technique
    const val = e.target.value
    const id = e.target.id
    setFormValues(prevValues => {
      return {
        ...prevValues,
        [id]: !val
      }
    })
  }

  return (
    <form style={{ display: 'flex', flexDirection: 'column'}}>
      <input type='text' id='name' value={formValues.name} onChange={handleTextValueChange}/>
      <input type='email' id='email' value={formValues.email} onChange={handleTextValueChange}/>
      <input type='checkbox' id='checkbox' value={formValues.checkbox}  onChange={handleCheckBoxValueChange}/>
    </form>
  );
};

export default Box;