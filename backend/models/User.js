import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true },
});

const userModel = mongoose.model("User", userSchema);

export default userModel;
