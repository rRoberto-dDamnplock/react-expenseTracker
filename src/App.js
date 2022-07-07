// import ExpenseItem from "./components/ExpenseItem";
import React, { useState } from 'react';
import Expenses from './components/expenses/Expenses'
import NewExpense from './components/NewExpense/NewExpense'
const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { 
    id: "e2", 
    title: "New TV", 
    amount: 799.49, 
    date: new Date(2021, 2, 12) 
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];
const  App =() => {
 const[expenses, setExpenses]=useState(DUMMY_EXPENSES)  //////this uses the DUMMY_EXPENSES as an initial state. Then later below it is being changed as the one that is being inputed.

  const addExpenseHanlder = expense => { ////this takes the data from the NewExpense --> ExpenseForm
    setExpenses((prevExpenses) => {
      return[expense, ...prevExpenses]  ////////this sets the rendered expenses dinamically from what is entered.
    });
  }
  return (
    <div>

  <NewExpense onAddExpense={addExpenseHanlder}/>
  {/* props have to be transfered from a parent component to the child component.*/}
      <Expenses items={expenses}/>

    </div>
  );
}

export default App;
