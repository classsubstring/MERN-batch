let expenses = [
  {
    id: 1212,
    title: "Launch1",
    description: "This is luanch",
  },
  {
    id: 1341,
    title: "Launch2",
    description: "This is luanch",
  },
];

//get expenses
export const getExpenses = (req, resp) => {
  resp.json(expenses);
};

//get single expense
export const getExpense = (req, resp) => {
  //   console.log("params");
  //   console.log(req.params);
  const { expenseId } = req.params;
  //   console.log(expenseId);
  const ex = expenses.find((item) => item.id == expenseId);
  resp.json(ex);
};
//create expense
export const createExpense = (req, resp) => {
  console.log(req.body);
  const { id, title, description } = req.body;

  expenses.push({
    title,
    description,
    id,
  });
  resp.send("Expense Created");
};

//delete expense
export const deleteExpense = (req, resp) => {
  const { expenseId } = req.params;
  expenses = expenses.filter((ex) => ex.id != expenseId);
  resp.send("Expense Deleted");
};

//update expense
export const updateExpense = (req, resp) => {
  const { expId } = req.params;
  const { title, description } = req.body;

  expenses = expenses.map((exp) => {
    if (exp.id == expId) {
      /// update fir return
      exp.title = title;
      exp.description = description;
      return exp;
    } else {
      return exp;
    }
  });

  resp.send("Expense updated ");
};
