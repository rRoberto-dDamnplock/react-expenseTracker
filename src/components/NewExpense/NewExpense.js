import React from "react";
import './NewExpense.css'
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {

    const onSaveExpenseDataHanlder = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData, ///this pulls all the data from the expense data in Expense Form
            id: Math.random().toString()  ////this is an added value from the ExpenseForm
        }
        props.onAddExpense(expenseData)///this takes data from the ExpenseForm. 
    };
return (
    <div className="new-expense">
        <ExpenseForm onSaveExpenseData={onSaveExpenseDataHanlder} />
    </div>
)
}


export default NewExpense;