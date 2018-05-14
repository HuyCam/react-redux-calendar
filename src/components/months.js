import React, { Component } from 'react';
import Navigation from './navigation';

class Months extends Component {
  render() {
      // if display option is true, then don't display months
      if (this.props.displayOption) {
        return null;
      }
      
      return(
          <div>
              !Display Months
          </div>
      );
  }
}

export default Months;