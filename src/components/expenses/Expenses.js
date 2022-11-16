import { React, useState } from 'react'
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';
const Expenses = (props) => {
  const [filteredYear, setfilteredYear]=useState('2020')
  const filterChangeHandler = (selectedyear) =>
  {
    console.log('Expenses.js');
    setfilteredYear(selectedyear);
    console.log(selectedyear);
  }
  

  const renderExpensesList  = props.expenses.map((item) => {
    return (
      <ExpenseItem
         key={item.id}
        title={item.title}
        amount={item.amount}
        date={item.date}
      />
    )
  })


  return (

    <Card className='expenses'>
      <ExpenseFilter  selected={filteredYear} onChangeFilter={filterChangeHandler }/>
      {
        renderExpensesList
      }
      {/* <ExpenseItem
      title={props.expenses[0].title}
      amount={props.expenses[0].amount}
      date={props.expenses[0].date}
      />
      <ExpenseItem
      title={props.expenses[1].title}
      amount={props.expenses[1].amount}
      date={props.expenses[1].date}
      />
      <ExpenseItem
      title={props.expenses[2].title}
      amount={props.expenses[2].amount}
      date={props.expenses[2].date}
      />
      <ExpenseItem
      title={props.expenses[3].title}
      amount={props.expenses[3].amount}
      date={props.expenses[3].date}
      /> */}
    </Card>
  )
}

export default Expenses
