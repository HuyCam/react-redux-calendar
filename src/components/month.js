import React, { Component } from 'react';

const Month = (props) => {
    const monthNames = [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const time = props.time;
    function accessMonth(e) {
        console.log(time);
    }
    return (
        <button className="month-render" onClick={accessMonth}>
            {monthNames[props.time.month]}
        </button>
    );
};

export default Month;