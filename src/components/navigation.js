import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateMonthYear } from '../actions/index';

class Navigation extends Component {

    render() {
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const { month, year } = this.props;
        return(
          <div className="navigation">
            <div>{months[month]} {year}</div>
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