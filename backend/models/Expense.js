import mongoose from "mongoose";

const expenseSchema = mongoose.Schema({
  date: { type: Date, required: true },
  income: { type: Number, required: true },
  incomeNote: { type: String, trim: true },
  expenses: {
    item: { type: String, required: true, trim: true },
    value: { type: Number, required: true },
    time: { type: Date, required: true },
    category: { type: String, required: true, trim: true },
  },
});

const expenseModel = mongoose.Model("Expense", expenseSchema);

export default expenseModel;
