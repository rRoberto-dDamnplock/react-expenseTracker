import React, { useState } from "react";
import "./ExpenseForm.css";

///you can use one useState method for multiple inputs, however, make sure the setting parameters are changed
const ExpenseFrom = (props) => {
    const [enteredTitle, setTitle] = useState(''); //////these are useState function that are re used in handler functions..., Though this method needs multile state functions //
    const [enteredAmount, setAmount] = useState('');
    const [enteredDate, setDate] = useState('');

    const [switchState, setSwitchState] = useState(0)


    const onClickHandler = () => {
      setSwitchState(1)
    }

    const canceledClick = () => {
      setSwitchState(0)
    }

    const titleHandler = (event) => {  
       setTitle(event.target.value)  ////this event.target.value shows the value in the input. Kind of like the req.body.title of the front end///


  }


    const amountHandler = event => {
        setAmount(event.target.value)
        // setUserInput({
        //   ...userInput,
        //   enteredAmount: event.target.value,
        // })
    }

    const dateHandler = event => {
setDate(event.target.value);

// setUserInput({  //this is another alternative
//   ...userInput,
//   enteredDate: event.target.value,
// })
    }

    const submitHandler = (event) => {
      event.preventDefault();

      const expenseData = { ////this const is used to store the data got from the submit handler. the object inside are refered to the useState [1,0] above
        title: enteredTitle,
        amount: +enteredAmount,
        date: new Date(enteredDate)
      }
     
     
      props.onSaveExpenseData(expenseData);////this prop is being taken from the NewExpense. The onSaveData is a function stated in the NewExpense

       ////this set title below is used to reset the title to empty after it is submited 
      setTitle('');
      setAmount('');
      setDate('');
      setSwitchState(0);

setTimeout(() => {
alert('Expense Succesfully added')
}, 500)
    }

    return (
      <form onSubmit={submitHandler}>
        {switchState === 1 ? (
          <div>
            <div className="new-expense__controls">
              <div className="new-expense__control">
                <label>Title</label>
                <input
                  type="text"
                  value={enteredTitle}
                  onChange={titleHandler}
                />
              </div>
              <div className="new-expense__control">
                <label>Amount</label>
                <input
                  type="number"
                  min="0.01"
                  step="0.01"
                  value={enteredAmount}
                  onChange={amountHandler}
                />
              </div>
              <div className="new-expense__control">
                <label>Date</label>
                <input
                  type="date"
                  min="2019-01-01"
                  max="2022-12-31"
                  value={enteredDate}
                  onChange={dateHandler}
                />
              </div>
            </div>
            <div className="new-expense__actions">
            <button type="reset" onClick={canceledClick}>Cancel</button>
              <button type="submit">Add Expense</button>
            </div>
          </div>
        ) : (
          <div className="new-expense__actions">
            <button type="button" onClick={onClickHandler}>
              Add New Expense
            </button>
          </div>
        )}
      </form>
    );
  };



export default ExpenseFrom;
