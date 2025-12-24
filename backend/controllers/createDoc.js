import mongoose from "mongoose";
import { resultModel } from "../model/resultSchema.js";

const createDoc = async () => {
  try {
    await resultModel.insertMany([
      {
        mat: 1,
        name: "Jane",
        ges: 2,
        mth: 3,
        eng: 3,
        chm: 2,
        phy: 2,
      },
      {
        mat: 2,
        name: "Jon",
        ges: 3,
        mth: 3,
        eng: 3,
        chm: 1,
        phy: 2,
      },
      {
        mat: 3,
        name: "Peter",
        ges: 3,
        mth: 3,
        eng: 3,
        chm: 2,
        phy: 2,
      },
      {
        mat: 4,
        name: "Anna",
        ges: 2,
        mth: 3,
        eng: 2,
        chm: 2,
        phy: 1,
      },
      {
        mat: 5,
        name: "Rita",
        ges: 3,
        mth: 1,
        eng: 2,
        chm: 2,
        phy: 3,
      },
      {
        mat: 6,
        name: "Ada",
        ges: 3,
        mth: 1,
        eng: 1,
        chm: 2,
        phy: 2,
      },
      {
        mat: 7,
        name: "James",
        ges: 3,
        mth: 3,
        eng: 3,
        chm: 3,
        phy: 2,
      },
    ]);
    console.log("Docs Created");
  } catch (err) {
    console.error("Error: ", err);
  }
};

export { createDoc };
