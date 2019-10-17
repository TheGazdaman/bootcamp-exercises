import React from 'react';
import Seat from './Seat.jsx'

export default class Carriage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      availability: this.props.availability,
      selectedSeat: null,
    }
  }
  handleSelect = (selectedSeat) => {
    this.setState({ selectedSeat: this.state.selectedSeat = selectedSeat });
  }
  checkAvailability(seat) {

    switch (seat) {
      case "t":
        return "free";
      default:
        return "occupied";
    }
  }

  render() {
    return (
      <div className = "carriage-row">
      
        <Seat 
          availability = {this.checkAvailability(this.state.availability[0])}
          seatNo = {this.props.row * 10 + 1}
          onSelect = {this.handleSelect}
          selected = {this.props.row * 10 + 1 === this.state.selectedSeat}
        />

        <Seat 
          availability = {this.checkAvailability(this.state.availability[0])}
          seatNo = {this.props.row * 10 + 2}
          onSelect = {this.handleSelect}
          selected = {this.props.row * 10 + 2 === this.state.selectedSeat}
          />

          <Seat 
          availability = {this.checkAvailability(this.state.availability[0])}
          seatNo = {this.props.row * 10 + 3}
          onSelect = {this.handleSelect}
          selected = {this.props.row * 10 + 3 === this.state.selectedSeat}
          />

          <Seat 
          availability = {this.checkAvailability(this.state.availability[0])}
          seatNo = {this.props.row * 10 + 4}
          onSelect = {this.handleSelect}
          selected = {this.props.row * 10 + 4 === this.state.selectedSeat}
          />

      </div>
    ); 
  }
}