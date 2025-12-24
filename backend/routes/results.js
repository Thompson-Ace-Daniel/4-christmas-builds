import express from "express";
import { findDoc } from "../controllers/findDoc.js";

const router = express.Router();

router.post("/results", async (req, res) => {
  try {
    const result = await findDoc();
    res.status(200).json(result);
  } catch (err) {
    console.error("Error: ", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
