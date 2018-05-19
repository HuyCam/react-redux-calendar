import React, { Component } from 'react';
import Navigation from './navigation';
import Month from './month';
import { connect } from 'react-redux';

class Months extends Component {
    renderMonths() {
        const months = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
        const year = this.props.time.year;
        return months.map(month => <Month  key={month} time={{year, month}} />);
    }

  render() {
      // if display option is true, then don't display months
      if (this.props.displayOption) {
        return null;
      }

      return(
          <div className="calendar">
              {this.renderMonths()}
          </div>
      );
  }
}

function mapStateToProps(state) {
    return {
        time: state.time
    }
}
export default connect(mapStateToProps)(Months);