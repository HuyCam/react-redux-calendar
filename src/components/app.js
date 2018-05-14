import React, { Component } from 'react';
import Calendar from './calendar';
import { updateMonthYear, updateToday } from '../actions/index';
import { connect } from 'react-redux';

class App extends Component {
  componentDidMount() {
    const today = new Date();
    this.props.updateMonthYear(today.getFullYear(), today.getMonth());
    this.props.updateToday(today.getFullYear(), today.getMonth(), today.getDate());
    console.log('App props: ', this.props);
  }

  render() {
    return (
      <div>
        <Calendar />
      </div>
    );
  }
}

export default connect(null, { updateMonthYear, updateToday })(App);