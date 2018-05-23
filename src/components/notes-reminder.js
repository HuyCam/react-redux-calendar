import React, { Component } from 'react';
import { connect } from 'react-redux';

class Notes extends Component {
    render() {
        return(
            <div>
                {JSON.stringify(this.props.reminder)}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        reminder: state.notes,
        selectedDate: state.selectedDate
    }
}
export default connect(mapStateToProps)(Notes);