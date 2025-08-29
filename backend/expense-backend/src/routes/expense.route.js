import { Router } from "express";

const expenseRouter = Router();
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

//get single expense

// get all expenses
expenseRouter.get("/expenses", (req, resp) => {
  resp.json(expenses);
});

expenseRouter.get("/expenses/:expenseId", (req, resp) => {
  //   console.log("params");
  //   console.log(req.params);
  const { expenseId } = req.params;
  //   console.log(expenseId);
  const ex = expenses.find((item) => item.id == expenseId);
  resp.json(ex);
});

// create expese

expenseRouter.post("/expenses", (req, resp) => {
  console.log(req.body);
  const { id, title, description } = req.body;

  expenses.push({
    title,
    description,
    id,
  });
  resp.send("Expense Created");
});

expenseRouter.delete("/expenses/:expenseId", (req, resp) => {
  const { expenseId } = req.params;
  expenses = expenses.filter((ex) => ex.id != expenseId);
  resp.send("Expense Deleted");
});

// updating expense

expenseRouter.put("/expenses/:expId", (req, resp) => {
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

  resp.send("Expense updated ")

});

export default expenseRouter;
