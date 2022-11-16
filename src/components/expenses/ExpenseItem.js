import React, {useState} from 'react'
import ExpenseDate from './ExpenseDate'

import './ExpenseItem.css';
import Card from '../UI/Card';



const ExpenseItem = (props) => {
  const [title, setTitle]= useState(props.title)
  const clickHandler=()=>{
  setTitle('updated')
  };
  // console.log(props)
  return (
    
    <Card className='expense-items'>
      <ExpenseDate date={props.date}/>
      <div className='expense-title'>{title}</div>
      <div className='expense-amount'>${props.amount}</div>
      <button onClick={clickHandler}>change title</button>
  </Card>
   
  )
}

export default ExpenseItem
