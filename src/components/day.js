import React, { Component } from 'react';


const Day = (props) => {
  const today = props.type.today ? props.type.today : '';
  const type = props.type.type;
  const onDateChange = () => {
    if (type === 'not-belong') {
      props.onDateChange(props.date);
    }
  }

  return(
    <button className={`day-render ${props.type.type} ${today}`} onClick={onDateChange}>
      <time>
      {props.date.getDate()}
      </time>
    </button>
  );

}

export default Day;