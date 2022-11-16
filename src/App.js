import React, {useState} from 'react';
import './App.css';
import Expenses from './components/expenses/Expenses.js';
import Addnewexpense from './components/Newexpense/Addnewexpense';

const items=[
  {
      id: 'e1',
      title:'Flower Pot',
      amount: 94.12,
      date: new Date(2023, 21, 8),
  },
  {
      id: 'e2',
      title:'Car insurance',
      amount: 494.12,
      date: new Date(2023, 22, 8),
  },
  {
      id: 'e3',
      title:'rent',
      amount: 339.12,
      date: new Date(2023, 24, 8),
  },
  {
      id: 'e4',
      title:'food items',
      amount: 944.67,
      date: new Date(2023, 30, 8),
  },
];

function App(props) {
const [expenses, setExpenses]= useState(items);

  const addExpenseHandler=(expense)=>{
    setExpenses((prevExpenses)=>{
      return[expenses,...prevExpenses];

    })
    // items.push(expense)
    // console.log(expense);
  }
  return (
    <div className='main'>
      <Addnewexpense onAddExpense={addExpenseHandler}/>
      <Expenses expenses={items}/>
    </div>
  );
}

export default App;
