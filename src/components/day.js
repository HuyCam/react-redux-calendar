import React, { Component } from 'react';


const Day = (props) => {
  const today = props.type.today ? props.type.today : '';
  const type = props.type.type;

  const onDateChange = () => {
    if (type === 'not-belong') {
      props.onDateChange(props.date);
    }
  };
  
  const handleClick = () => {
    const dateObj = {
      year: props.date.getFullYear(),
      month: props.date.getMonth(),
      date: props.date.getDate()
    };
    props.handleSelectedDate(dateObj);
    onDateChange();
  };

  return(
    <button 
      className={`day-render ${props.type.type} 
      ${today}`} onClick={handleClick} 
      autoFocus={props.autofocus} 
      >
      <time>
      {props.date.getDate()}
      </time>
    </button>
  );

}

export default Day;