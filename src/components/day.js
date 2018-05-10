import React, { Component } from 'react';

class Day extends Component {
    render() {
      return(
        <button className="day-render">
          <time className={this.props.type}>
          {this.props.date.getDate()}
          </time>
        </button>
      );
    }
}

export default Day;