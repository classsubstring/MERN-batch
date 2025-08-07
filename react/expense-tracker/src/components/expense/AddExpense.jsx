import { useState } from "react";
import { RxCross2 } from "react-icons/rx";

function AddExpense() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [expDate, setExpDate] = useState("");
  const [category, setCategory] = useState("recharge");
  const [error, setError] = useState({
    title: "",
    description: "",
  });

  const [expenses, setExpenses] = useState([]);

  function handleFormChange(event) {
    // console.log(event.target.name);
    // console.log(event.target.value);

    if (event.target.name == "title") {
      setTitle(event.target.value);
    } else if (event.target.name == "description") {
      setDescription(event.target.value);
    } else if (event.target.name == "date") {
      setExpDate(event.target.value);
    } else if (event.target.name == "category") {
      setCategory(event.target.value);
    } else {
      console.log("invalid field");
    }
  }

  function handleForm(event) {
    event.preventDefault();

    let hasError = false;

    const localError = {
      title: "",
      description: "",
    };

    // title validattion
    if (title.trim() == "") {
      console.log("title is blank");

      localError.title = "Expenes Title is required !!";

      hasError = true;
    } else if (title.length <= 5) {
      localError.title = "In Title min 6 characters are required !!";

      hasError = true;
    }

    // content
    if (description.trim() == "") {
      console.log("desc is blank");
      localError.description = "Write something about your expense !!";

      hasError = true;
    }

    if (hasError) {
      console.log("form has error");
      setError(localError);
      return;
    }

    console.log("form submit");
    const expese = {
      title,
      description,
      expDate,
      category,
    };
    console.log(expese);
    setExpenses([...expenses, expese]);
    setError({
      title: "",
      description: "",
    });
  }
  return (
    <div className="m-4 flex gap-3  justify-center">
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
            return (
              <div className="p-3 relative bg-slate-300 rounded-xl m-1">
                <h1>{exp.title}</h1>
                <p>{exp.description}</p>
                <button className="absolute top-4 right-4 p-3 hover:bg-slate-700 hover:text-white rounded-full cursor-pointer transition-all duration-100">
                  <RxCross2 />
                </button>
              </div>
            );
          })}
        </div>
      </div>
      {/* add expense form */}
      <form
        onSubmit={handleForm}
        className="  w-full md:w-1/2 p-10 rounded-2xl bg-slate-300"
      >
        {/* Error */}
        {/* {error && (
          <div className="error_container p-3 bg-red-500 text-white rounded my-3">
            <p>{error}</p>
          </div>
        )} */}
        {/* title field */}

        <div className="flex gap-2 mb-3 flex-col">
          <label htmlFor="title">Title </label>
          <input
            onChange={handleFormChange}
            className="px-3 py-2 bg-gray-50 rounded"
            type="text"
            name="title"
            id="title"
            value={title}
            placeholder="Enter title here"
          />

          {error.title && <p className="text-red-600 ml-2">{error.title}</p>}
        </div>

        {/* description field */}

        <div className="flex gap-2 mb-3 flex-col">
          <label htmlFor="description">Write more about this expense </label>
          <textarea
            onChange={handleFormChange}
            className="px-3 py-2 bg-gray-50 rounded"
            type="text"
            name="description"
            id="description"
            rows={5}
            value={description}
            placeholder="Enter title here"
          ></textarea>
          {error.description && (
            <p className="text-red-600 ml-2">{error.description}</p>
          )}
        </div>

        {/* date field */}
        <div className="flex gap-2 mb-3 flex-col">
          <label htmlFor="date">Date </label>
          <input
            onChange={handleFormChange}
            className="px-3 py-2 bg-gray-50 rounded"
            type="date"
            name="date"
            id="date"
            value={expDate}
            placeholder="Enter date here"
          />
        </div>

        <div className="flex gap-2 mb-3 flex-col">
          <label htmlFor="">Select Expense Category</label>
          <select
            value={category}
            name="category"
            onChange={handleFormChange}
            className="px-3 py-2 bg-gray-50 rounded"
          >
            <option value={"recharge"}>Recharge</option>
            <option value={"food"}>Food</option>
            <option value={"bank transfer"}>Bank Transfer</option>
          </select>
        </div>

        {/* button */}
        <div className="flex gap-3 justify-center">
          <button
            type="submit"
            className=" cursor-pointer px-3 py-1 bg-green-700 text-white rounded"
          >
            Add Expense
          </button>
          <button
            type="button"
            onClick={() => {
              setTitle("");
              setDescription("");
              setExpDate("");
              setCategory("food");
              setError({
                title: "",
                description: "",
              });
            }}
            className="px-3 py-1 bg-red-700 text-white rounded"
          >
            Clear
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddExpense;
