import React from 'react'

const UserCard = (props) => {

  const user = props.user
  const index= props.index
  const setSelectedUser = props.setSelectedUser
  const selectedUser = props.selectedUser
  
  
  const clickHandler = () => {
    setSelectedUser(index)
  }

  
    return (
      <div className="box" style={{display: 'flex', flexDirection: 'column', backgroundColor: selectedUser === index ? 'blue' : 'lightblue', color: selectedUser === index ? 'white' : 'black' }} onClick={clickHandler}>
      <p>{user.name}</p>
      <p>{user.age}</p>
      <p>{user.job}</p>
      <p>{user.rank}</p>
      </div>
   ) 
  
    
}

export default UserCard 
