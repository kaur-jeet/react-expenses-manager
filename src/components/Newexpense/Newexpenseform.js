import React, { useState } from 'react'
import './Newexpenseform.css';

const Newexpenseform = (props) => {
    const [enteredTitle, setenteredTitle] = useState(" ");
    const [enteredAmount, setenteredAmount] = useState(" ");
    const [enteredDate, setenteredDate] = useState(" ");


    const TitleChangeHandler = (event) => {
        setenteredTitle(event.target.value);
    }


    const AmountChangeHandler = (event) => {
        setenteredAmount(event.target.value);
    }

    const DateChangeHandler = (event) => {
        setenteredDate(event.target.value);
    }

    const FormSubmitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate),
        };
        console.log(expenseData);
        props.onSaveExpenseData(expenseData);
        setenteredTitle('');
        setenteredAmount('');
        setenteredDate('');
    }
    return (

        <div className='expense-form'>
            <form onSubmit={FormSubmitHandler}>
                <div className='Title-amount'>
                    <div className='form-expense-items'>
                        <label className='label'>Title</label>
                        <input type='text' className='input-box' value={enteredTitle} onChange={TitleChangeHandler} />
                    </div>
                    <div className='amount'>
                        <label className='label'>Amount</label>
                        <input type='number' className='input-box' value={enteredAmount} onChange={AmountChangeHandler} />
                    </div></div>

                <div className='form-expense-items'>
                    <label className='label'>Date</label>
                    <input type='date' className='input-box' value={enteredDate} onChange={DateChangeHandler} min='01-01-2020' max='01-12-2025' />
                    <button className='expense-add-button' >Add Expense</button> </div>
            </form>
        </div>
    )
}

export default Newexpenseform
