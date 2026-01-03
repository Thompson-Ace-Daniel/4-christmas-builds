import express from "express";
import {
  users,
  deleteUsers,
  addUser,
  deleteOne,
} from "../controllers/users.controller.js";

const router = express.Router();

router.get("/users/get", users);
router.delete("/users/delete-all", deleteUsers);
router.post("/users/add", addUser);
router.delete("/users/delete-one", deleteOne);

export default router;
