import React, { Component } from 'react';
import Days from './days';
import Navigation from './navigation';

class Calendar extends Component {
    
    renderDayName() {
        const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
        return days.map((day) => <div className="day-render day-name" key={day}>{day}</div>);
    }

    render() {
      return (
        <div id="calendar">
            <Navigation />
            {this.renderDayName()}
            <Days />
        </div>
      );
    }
}

export default Calendar;