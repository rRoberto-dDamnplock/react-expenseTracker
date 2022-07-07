// import React, { useState } from "react";

import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {

const yearChosen = (event) => { /// this calls the function from the expenses file. hello
  const chosen = event.target.value;
  // console.log(chosen)
  props.showYearHandler(chosen) ///this hear passes the chosen year to the Expenses file. The showHandler is a prop.
}

  return (
    <div className="expenses-filter">
       
      <div className="expenses-filter__control">
      
        <label>Filter by year</label>
    
        <select value={props.selected} onChange={yearChosen}>
        <option value="ALL">ALL</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          
        </select>
      
      </div>
    
    </div>
  );
};

export default ExpensesFilter;
