import React, { Component } from 'react';


const Day = (props) => {
  const onDateChange = () => {
    if (props.type === 'not-belong') {
      props.onDateChange(props.date);
    }
  }

  return(
    <button className={`day-render ${props.type}`} onClick={onDateChange}>
      <time>
      {props.date.getDate()}
      </time>
    </button>
  );

}

export default Day;