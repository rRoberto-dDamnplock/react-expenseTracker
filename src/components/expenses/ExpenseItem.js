// eslint-disable-next-line

// import { useState } from 'react';

import "./ExpenseItem.css";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";


function ExpenseItem(props) {
//  const [title, setTitle] = useState(props.title);

//the date in the Expense date is set to a specific format in the Expense date file. Once again, the props are being taken from the parent component
//   const clickHandler = () => {
//  setTitle('Updated!')
//   };

  return (
  
  <li>
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">$ {props.amount.toLocaleString()}</div>
      </div>
      {/* <button onClick={clickHandler}>Change Title</button> */}
    </Card>
    </li>
   
  );
}

export default ExpenseItem;
