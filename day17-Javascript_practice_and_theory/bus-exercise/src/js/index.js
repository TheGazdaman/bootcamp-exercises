class Bus {
  constructor(direction, station, seat, passenger) {
    this.direction = direction;
    this.station = station;
    this.seat = seat;
    this.passenger = passenger;
    this.lastStation = 0;
  }

  current() {
    this.station = lastStation;
  }

  next() {
    return this.lastStation += 1;
  }

  boardCount() {
    this.seat += 1;
    if (number.seat >= 58) {
      return "Bus is full";
    } return "Bon voyage"; 
  }

  unboardCount() {
    this.seat -= 1;
    if (number.seat > 0) {
      console.log('Bus is empty');
    }
  }
}


[
  console.log('Prague-Vienna', ['Prague', 'Jihlava', 'Brno', 'Breclav', 'Vienna'], 55, 40, 'Jihlava'),
];
