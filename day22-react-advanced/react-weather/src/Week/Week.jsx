import React from 'react';
import './Week.scss';
import Day from '../Day/Day.jsx';
import forecast from '../forecast';

export default class WeekForecast extends React.Component {
  render () {
    return (
      <div className="week-forecast">
        {
          forecast.map(day => (
            <Day
              weekday={day.weekday}
              weather={day.weather}
              tempDay={day.tempDay}
              tempNight={day.tempNight}
            />
          ))
        }
      </div>
    )
  }
}


