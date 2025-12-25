import mongoose from "mongoose";

const expenseSchema = mongoose.Schema({
  date: { type: Date, required: true },
  income: { type: Number, required: true },
  expenses: {
    item: { type: String, required: true, trim: true },
    value: { type: Number, required: true },
  },
});

const expenseModel = mongoose.Model("Expense", expenseSchema);

export default expenseModel;
