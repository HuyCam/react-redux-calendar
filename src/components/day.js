import React, { Component } from 'react';

class Day extends Component {
    render() {
      return(
        <button className={`day-render ${this.props.type}`}>
          <time>
          {this.props.date.getDate()}
          </time>
        </button>
      );
    }
}

export default Day;