import React from 'react'
import './ExpenseDate.css';
function  ExpenseDate(props){

    const month=props.date.toLocaleString('en-US', {month:'long'});
    const day=props.date.toLocaleString('en-US' , {day:'2-digit'});
    const year=props.date.getFullYear();
    
    console.log("date", props.date)
  return (
    <div>
      <div className="expense-date">
        <div className="expense-date-month">{month}</div>
        <div className="expense-date-year">{year}</div>
        <div className="expense-date-day">{day}</div>
      </div>
    </div>
  );
}

export default ExpenseDate
