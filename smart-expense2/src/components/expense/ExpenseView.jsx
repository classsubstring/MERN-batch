import React from "react";
import { RxCross2 } from "react-icons/rx";
function ExpenseView({ expense }) {
  return (
    <div className="p-3 relative bg-slate-800 text-white rounded-xl m-1">
      <h1 className="text-2xl font-bold">{expense.title}</h1>
      <p>{expense.description}</p>
      <button className="absolute top-4 right-4 p-3 hover:bg-slate-700 hover:text-white rounded-full cursor-pointer transition-all duration-100">
        <RxCross2 />
      </button>
    </div>
  );
}

export default ExpenseView;
