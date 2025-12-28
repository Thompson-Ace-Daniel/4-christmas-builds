import mongoose from "mongoose";

const wishSchema = mongoose.Schema({
  name: { type: String, trim: true },
  to: { type: String, trim: true },
  message: { type: String, required: true, trim: true },
  time: { type: Date, required: true },
});

const wishModel = mongoose.model("Wishes", wishSchema);

export default wishModel;
