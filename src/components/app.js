import React, { Component } from 'react';
import Calendar from './calendar';
import { updateMonthYear, updateToday, toggleMode } from '../actions/index';
import { MONTHS_MODE, DAYS_MODE} from '../actions/index';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// testing purpose
import StoreChecking from './storeTracking';
//end testing
class App extends Component {
  componentDidMount() {
    const today = new Date();
    this.props.updateMonthYear(today.getFullYear(), today.getMonth());
    this.props.updateToday(today.getFullYear(), today.getMonth(), today.getDate());
    this.props.toggleMode(DAYS_MODE);
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <Calendar />
            <Link className="btn btn-primary" to="/reminder/add">
              Add Reminder
            </Link>
          </div>
          <div className="col-md-6">
            <div id="reminder" >Reminder</div>
            <StoreChecking />
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, { updateMonthYear, updateToday, toggleMode })(App);
