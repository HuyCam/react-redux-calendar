import React, { Component } from 'react';
import _ from 'lodash';
import Day from './day';
import { connect } from 'react-redux';
import { updateMonthYear } from '../actions/index';

class Days extends Component {
    constructor(props) {
        super(props);
        this.onDateChange = this.onDateChange.bind(this);
    }
    renderDay(year, month) {
        /* firstDate is the first day of the month
        ** firstCalendarDate is the first day of the calendar need to display
        ** firstCalendarDate is always the sunday
        ** lastCalendarDate is always the saturday
        */
        const firstDate = new Date(year, month, 1);
        const lastDate = new Date(year, month + 1, 0);
        const firstCalendarDate = this.getFirstDayOfWeek(firstDate);
        const lastCalendarDate = this.getLastDayOfWeek(lastDate);
        const dates = this.calendarDate(firstCalendarDate, lastCalendarDate);
        return dates;
    }

    calendarDate(start, end) {
        let key = 0;
        let dates = [];
        while (start <= end) {
            const type=this.dateType(start.getDate(), key, start.getDay());
            dates.push(<Day key={key} date={_.clone(start)} type={type} onDateChange={this.onDateChange}></Day>);
            key++;
            start.setDate(start.getDate() + 1);
        }
        return dates;
    }

    // determine if this is the date of 
    dateType(date, index, day) {
        if (index < 7 && date > 20  || index > 20 && date < 7 ) {
            return 'not-belong';
        } if (day === 5 || day === 6) {
            return 'weekend';
        } else {
            return 'regular';
        }
    }

    // return the first date object of the week
    getFirstDayOfWeek(dateObj) {
        const firstDate = _.clone(dateObj);
        const difference = dateObj.getDay() - 0;
        firstDate.setDate(firstDate.getDate() - difference);
        return firstDate;
    }

    getLastDayOfWeek(dateObj) {
       const lastDate = _.clone(dateObj);
       const difference = 6 - dateObj.getDay();
       lastDate.setDate(lastDate.getDate() + difference);
       return lastDate;
    }

    // this event receive the date of the component and dispatch
    // update date
    onDateChange(date) {
        const year = date.getFullYear();
        const month = date.getMonth();
        this.props.updateMonthYear(year, month);
    }

    render() {
      const { year, month } = this.props;
      return(
          <div className="calendar" >
            {this.renderDay(year, month)}
          </div>
      );
    }
}

function mapStateToProps(state){
    return {
        month: state.time.month,
        year: state.time.year
    }
}
export default connect(mapStateToProps, { updateMonthYear })(Days);