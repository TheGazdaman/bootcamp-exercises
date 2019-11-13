import React, { useState, useEffect }  from "react";
import UserCard from './User-card.jsx'

import './../index.scss';

const App = () => {

  const [users, setUser] = useState([]);
  const [selectedUser, setSelect] = useState();
  

  useEffect(() => {
    fetch("https://nemadywgu6.execute-api.us-west-2.amazonaws.com/prod/")
    .then(res => res.json())
    .then(user => {
      setUser(user)
    })
    .catch(err => {
      console.log('err', err);
    })
  }, []);

  
  return (
    <div style={{display: 'flex', flexDirection: 'row'}}>
    {users && users.map((user, index) => {
      return (
        <UserCard key={index}
          user={user}
          setSelectedUser={setSelect}
          selectedUser={selectedUser}
          index={index}
        />   
     ) 
    })}
    </div>
  )
}

export default App;
