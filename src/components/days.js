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

    // get the start date of the calendar and the end date of the calendar to iterate through and render all
    // start and end are date objects
    calendarDate(start, end) {
        // id format will be MMDD
        let id;
        let index = 0;
        let dates = [];
        const currentMonth = this.props.month;
        const currentDate = this.props.currentDate;
        const today = new Date(currentDate.year, currentDate.month, currentDate.date);
        while (start <= end) {
            id = start.getMonth()+ '' + start.getDate();
            const type = this.dateType(start.getMonth(), currentMonth, start.getDay());

            // this to determine is this date is today to pass it the today type
            if (today.getTime() === start.getTime()) {
                const today = 'today';
                dates.push(<Day key={id} date={_.clone(start)} type={{type, today}} onDateChange={this.onDateChange}></Day>);
            } else {
                dates.push(<Day key={id} date={_.clone(start)} type={{type}} onDateChange={this.onDateChange}></Day>);
            }
            index++;
            start.setDate(start.getDate() + 1);
        }
        return dates;
    }

    // determine if this is the date belong to this month or weekend or regular day
    dateType(month, currentMonth, day) {
        if (month !== currentMonth) {
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

// Days keeps the current month, year, and date
function mapStateToProps(state){
    return {
        month: state.time.month,
        year: state.time.year,
        currentDate: state.today
    }
}
export default connect(mapStateToProps, { updateMonthYear })(Days);