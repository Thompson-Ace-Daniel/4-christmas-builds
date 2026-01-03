import userModel from "../models/User.js";

const users = async (req, res) => {
  try {
    const users = await userModel.find();
    res.status(200).json(users);
    console.log("Users Sent");
  } catch (err) {
    console.error("Users Error", err);
    res.status(500).json({ error: "Internal server error" });
  }
};

const deleteUsers = async (req, res) => {
  try {
    const result = await userModel.deleteMany({});
    console.log(result.deletedCount);
    res.status(200).json({ success: true, deletedCount: result.deletedCount });
  } catch (err) {
    console.error("Delete Error: ", err);
    res.status(500).json({ error: "Internal server error" });
  }
};

const addUser = async (req, res) => {
  try {
    const data = req.body;
    const newUser = await userModel.create(data);
    console.log("New User Added");
    res.status(201).json(newUser);
  } catch (err) {
    console.error("Internal Server Error: ", err);
    res.status(500).json({ error: "Couldn't Add User" });
  }
};

const deleteOne = async (req, res) => {
  try {
    const { id } = req.body;
    if (!id) return res.status(400).json({ error: "Missing user id" });

    const deleted = await userModel.findByIdAndDelete(id);

    if (!deleted) return res.status(404).json({ error: "User not found" });

    console.log("User deleted", id);
    res.status(200).json({ success: true });
  } catch (err) {
    console.error("Delete Error: ", err.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export { users, deleteUsers, addUser, deleteOne };
