import express from "express";
import pushInsert from "../controllers/InsertOne.js";

const router = express.Router();

router.post("/insert", (req, res) => {
  try {
    const incoming = req.body;
    pushInsert(incoming);
    console.log(incoming);
    res.status(200).json(incoming);
  } catch (err) {
    console.error("Error: ", err);
  }
});

export default router;
