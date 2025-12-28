import mongoose from "mongoose";

const messageSchema = mongoose.Schema({
  header: { type: String, trim: true },
  service: { type: String, required: true, trim: true },
  message: { type: String, required: true, trim: true },
  likes: { type: Number },
  time: { type: Date, required: true },
});

const messageModel = mongoose.model("Message", messageSchema);

export default messageModel;
