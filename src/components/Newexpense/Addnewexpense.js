import React from 'react'
import Newexpenseform from './Newexpenseform';
import  './Addnewexpense.css';
const Addnewexpense = (props) => {
    const  saveExpenseDataHandler=(enteredExpenseData) => 
    {
        const expenseData={
            ...enteredExpenseData,
            id:Math.random().toString()
        };
        console.log(expenseData);
        props.onAddExpense(expenseData);
    };
  return (
    <div className='expenseform'>
      <Newexpenseform onSaveExpenseData={saveExpenseDataHandler}/>
    </div>
  )
}

export default Addnewexpense
