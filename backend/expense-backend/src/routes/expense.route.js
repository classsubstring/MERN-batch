import { Router } from "express";
import {
  createExpense,
  deleteExpense,
  getExpense,
  getExpenses,
  updateExpense,
} from "../controllers/expense.controller.js";

const expenseRouter = Router();

//get single expense
// get all expenses
expenseRouter.get("/expenses", getExpenses);
expenseRouter.get("/expenses/:expenseId", getExpense);
// create expese
expenseRouter.post("/expenses", createExpense);
expenseRouter.delete("/expenses/:expenseId", deleteExpense);
// updating expense
expenseRouter.put("/expenses/:expId", updateExpense);
export default expenseRouter;
