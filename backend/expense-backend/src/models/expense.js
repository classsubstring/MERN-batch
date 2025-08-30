import mongoose from "mongoose";

const expenseSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    required: true,
  },
  rs: {
    type: Number,
    require: true,
    min: 0,
  },
  hidden: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  paymentMethod: {
    type: String,
    default: "cash",
    require: true,
  },
  screenshot: {
    type: String,
  },
});

// create model from this schema

const Expense = mongoose.model("Expense", expenseSchema);

//data save-
//update
//get --
export default Expense;
