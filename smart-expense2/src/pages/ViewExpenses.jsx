import React from "react";
import { useState, useEffect } from "react";
import { getExpensesFromLocalStorage } from "../helper/local";
import ExpenseView from "../components/expense/ExpenseView";
function ViewExpenses() {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    console.log("Expense app started");
    const localExpArray = getExpensesFromLocalStorage();
    setExpenses([...localExpArray]);
  }, []);
  return (
    <div className="p-10 flex justify-center">
      {/* show all expense */}
      <div className="w-full md:w-1/2">
        {expenses.length > 0 ? (
          <h1 className="text-3xl font-bold my-3 ">
            Expense List : {expenses.length}
          </h1>
        ) : (
          <h1 className="text-3xl font-bold">No Expense Available</h1>
        )}

        <div className="expense_container">
          {expenses.map((exp, index) => {
            return <ExpenseView expense={exp} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default ViewExpenses;
