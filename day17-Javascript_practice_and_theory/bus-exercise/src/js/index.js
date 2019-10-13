class Bus {
  constructor(direction, stations, seats, passengers) {
    this.direction = direction;
    this.stations = stations;
    this.seats = seats;
    this.passengers = passengers;
    this.lastStation = 0;
  }

  current() {
    return this.station[this.lastStation];
  }

  next() {
    this.lastStation += 1;
    if (this.lastStation >= this.stations.length) {
      this.lastStation = this.stations.length - 1;
      console.log('Please, leave the bus.');
    }
  }

  boardCount(pas) {
    this.seat += pas;
    if (this.passengers >= this.seats) {
      return 'Bus is full'; //  this.passengers = this.seats
    } return 'Bon voyage';
  }

  unboardCount(pas) {
    this.passengers -= pas;
    if (this.passengers < 0) {
      this.passengers = 0;
    }
  }
}
