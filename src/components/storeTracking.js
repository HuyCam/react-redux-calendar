import React, { Component } from 'react';
import { connect } from 'react-redux';

class StoreChecking extends Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        console.log(this.props.info);
        return (
            <div>This is on developement process</div>
        )
    }
}

function mapStateToProps(state) {
    return {
        info: state
    }
}

export default connect(mapStateToProps)(StoreChecking);