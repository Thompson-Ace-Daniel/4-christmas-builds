import mongoose from "mongoose";


const resultSchema = mongoose.Schema({
  mat: { type: Number, required: true, unique: true, min: 1, max: 999 },
  name: { type: String, required: true, trim: true },
  ges: { type: mongoose.Decimal128, required: true, min: 0, max: 9 },
  mth: { type: mongoose.Decimal128, required: true, min: 0, max: 9 },
  eng: { type: mongoose.Decimal128, required: true, min: 0, max: 9 },
  chm: { type: mongoose.Decimal128, required: true, min: 0, max: 9 },
  phy: { type: mongoose.Decimal128, required: true, min: 0, max: 9 },
});

const resultModel = mongoose.model('Result', resultSchema);

export { resultModel };