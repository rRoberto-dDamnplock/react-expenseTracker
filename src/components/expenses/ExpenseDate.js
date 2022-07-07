import "./ExpenseDate.css";
////this ExpenseDate file is being rendered in this special way and format. However, the date rendered is set from the hard coded data which is in the App.js file the it is being propped to the Expense file.
function ExpenseDate (props){
    const month = props.date.toLocaleString("en-US", { month: "long" });
    const day = props.date.toLocaleString("en-US", { day: "2-digit" });
    const year = props.date.getFullYear();
    return (
        <div className="expense-date">
        <div className="expense-date__month">{month} </div>
        <div className="expense-date__day">{day}</div>
        <div className="expense-date_year">{year}</div>
      </div>
      );
    
}


export default ExpenseDate;