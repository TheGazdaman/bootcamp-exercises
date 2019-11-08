import React from 'react';
import ReactDom from 'react-dom';


export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      attendance: []
    }
  }

  componentDidMount() {
    fetch('https://classes.codingbootcamp.cz/api/attendance/coding-bootcamp/autumn-2019/2019-11-05')
    .then(response => {
      return response.json()
    }).then(data => {
      let attendance = data.attendance.map((student) => {
        return (
          <ul>
            <li>{student.name} (present since: {student.from} ) </li>
          </ul>
        )
      })
      this.setState({attendance: attendance})
    })
  };

  render () {

    return(
      <div>
      {this.state.attendance}
    </div>
    )  

  }
}