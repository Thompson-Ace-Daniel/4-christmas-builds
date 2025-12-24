import mongoose from "mongoose";

const connectDB = async (DATABASE_URL) => {
  try {
    await mongoose.connect(DATABASE_URL);
    console.log("Database Connected...");
  } catch (err) {
    console.error("Error: ", err);
  }
};

export default connectDB;