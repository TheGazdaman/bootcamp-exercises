import React, { Component } from "react";
import UserList from "./User-List.jsx";
import UserPanel from './User-Panel.jsx'

class App extends Component {
  constructor(props){
		super(props)
		this.state = {
      selecterUser: false,
      selectedUserIndex: null,
			data: [],
    }
  }
    
  componentDidMount = () => {
    fetch(`https://nemadywgu6.execute-api.us-west-2.amazonaws.com/prod/`)
    .then(response => response.json())
    .then(userData => this.setState ({ data: userData }))
  }
   selectedUser = selectedUserIndex => {
     console.log(this.state.data[selectedUserIndex]);
     this.setState({ 
      selectedUser: this.state.data[selectedUserIndex],
      selectedUserIndex: selectedUserIndex
     });
   }

  
  
  render() {
    return (
      <>
        <UserList 
          users={this.state.users}
          selectedUser={this.state.selecterUser}
          selectedUserIndex={this.state.selectedUserIndex}/>
        <UserPanel user={this.state.selecterUser}/>
      </>
    );
  }
}

export default App;
