import Expense from "../models/expense.js";

// let expenses = [
//   {
//     id: 1212,
//     title: "Launch1",
//     description: "This is luanch",
//   },
//   {
//     id: 1341,
//     title: "Launch2",
//     description: "This is luanch",
//   },
// ];

//get expenses
export const getExpenses = async (req, resp) => {
  //getting the data from database
  const exps = await Expense.find();
  resp.status(200).json(exps);

  // resp.json(expenses);
};

//get single expense
export const getExpense = async (req, resp) => {
  //   console.log("params");
  //   console.log(req.params);
  const { expenseId } = req.params;
  //   console.log(expenseId);
  // const ex = expenses.find((item) => item.id == expenseId);
  // resp.json(ex);

  const expense = await Expense.findOne({
    _id: expenseId,
  });

  resp.status(200).json(expense);
};

//create expense
export const createExpense = async (req, resp) => {
  console.log(req.body);
  const { title, description, rs, hidden, paymentMethod } = req.body;

  const ob = await Expense.create({
    title,
    description,
    paymentMethod,
    rs,
    hidden,
  });

  //save in database

  // expenses.push({
  //   title,
  //   description,
  //   id,
  // });
  resp.status(201).json(ob);
};

//delete expense
export const deleteExpense = async (req, resp) => {
  const { expenseId } = req.params;
  // expenses = expenses.filter((ex) => ex.id != expenseId);
  // resp.send("Expense Deleted");

  await Expense.findByIdAndDelete(expenseId);
  resp.json({
    message: "Expense deleted !",
  });
};

//update expense
export const updateExpense = async (req, resp) => {
  const { expId } = req.params;

  const { title, description, rs, hidden, paymentMethod } = req.body;

  // update to database
  await Expense.updateOne(
    {
      _id: expId,
    },
    {
      title,
      description,
      rs,
      hidden,
      paymentMethod,
    }
  );

  const updatedExpense = await Expense.findOne({
    _id: expId,
  });

  // const { title, description } = req.body;

  // expenses = expenses.map((exp) => {
  //   if (exp.id == expId) {
  //     /// update fir return
  //     exp.title = title;
  //     exp.description = description;
  //     return exp;
  //   } else {
  //     return exp;
  //   }
  // });

  // resp.send("Expense updated ");

  resp.status(200).json(updatedExpense);
};

//search by title
export const searchByTitle = async (req, resp) => {
  const { title } = req.query;
  console.log(title);
  // console.log(description);

  const expenses = await Expense.find({
    title: {
      $regex: title,
      $options: "i",
    },
  });

  resp.send(expenses);
};
