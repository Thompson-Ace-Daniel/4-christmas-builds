import mongoose from "mongoose";
import { resultModel } from "../model/resultSchema.js";

const findDoc = async () => {
  try {
    const result = await resultModel.find().sort({ mat: 1 });
    return result;
    console.log("Docs ready");
  } catch (err) {
    console.error("Error: ", err);
  }
};

export { findDoc };
