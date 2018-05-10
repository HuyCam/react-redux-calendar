import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateMonthYear } from '../actions/index';

class Navigation extends Component {
    constructor(props) {
        super(props);

        this.handleIncrement = this.handleIncrement.bind(this);
        this.handleDecrement = this.handleDecrement.bind(this);
    }

    handleIncrement() {
        // increase month by one
        let { month, year } = this.props;
        if (month === 11) {
            year++;
            month = 0;
            this.props.updateMonthYear(year, month);
        } else {
            month++;
            this.props.updateMonthYear(year, month);
        }
    }

    handleDecrement() {
        // decrease month by one
        let { month, year } = this.props;
        if (month === 0) {
            year--;
            month = 11;
            this.props.updateMonthYear(year, month);
        } else {
            month--;
            this.props.updateMonthYear(year, month);
        }
    }

    render() {
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const { month, year } = this.props;
        return(
          <div className="navigation">
            <div>
            <button className="nav-btn" onClick={this.handleDecrement}> {"<"} </button>
            <span className="navigation-info">{months[month]} {year}</span>
            <button className="nav-btn" onClick={this.handleIncrement}> {">"} </button>
            </div>
          </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        month: state.time.month,
        year: state.time.year
    }
}
export default connect(mapStateToProps, { updateMonthYear })(Navigation);