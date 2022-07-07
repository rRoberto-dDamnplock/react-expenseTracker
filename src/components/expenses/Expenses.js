
import { useState } from "react";
import "./Expenses.css";
import ExpensesFilter from "../NewExpense/ExpenseFiliter";
import ExpenseList from "./ExpensesList";
import ExpenseChart from "./ExpensesChart";
import Card from "../UI/Card";
// these props are taken from the parent compononent which is from the app.js.

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("ALL");

// let choiceYear = '2020';
  const addFilterByYear = (newYear) => {
    setFilteredYear(newYear);
    console.log(newYear)
  
  };
  


  const filteredExpense = props.items.filter(expense => {

    if(filteredYear !== 'ALL') {
    return expense.date.getFullYear().toString() === filteredYear;
  } else {
    return true
  }
  })

 
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          showYearHandler={addFilterByYear}
        />
        <ExpenseChart expense={filteredExpense}/>
       <ExpenseList items={filteredExpense}/>
      </Card>
    </div>
//     )}
// // })
)}


export default Expenses;
