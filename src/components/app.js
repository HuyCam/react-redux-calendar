import React, { Component } from 'react';
import Calendar from './calendar';
import { updateMonthYear } from '../actions/index';
import { connect } from 'react-redux';

class App extends Component {
  componentDidMount() {
    const today = new Date();
    this.props.updateMonthYear(today.getFullYear(), today.getMonth());
  }
  render() {
    return (
      <div>
        <Calendar />
      </div>
    );
  }
}

export default connect(null, { updateMonthYear })(App);