import React from 'react';

const Joke = (props) => {

  return  (
      <div>
        <h3 style={{display: props.question ? "block" : "none"}}>Question: {props.question}</h3> {/* !props.question && "none" */}
        <h3 style={{color: !props.question && "#888888"}}>Answer: {props.punchLine}</h3>
    
      </div>
    )
  }



export default Joke