import { resultModel } from "../model/resultSchema.js";

const pushInsert = (obj) => {
  resultModel.insertOne(obj);
};

export default pushInsert;
