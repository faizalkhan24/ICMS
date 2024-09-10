const {
  findUserById,
  updateUser,
  deleteUser,
  getAllUsers,
} = require("../models/userModel");
const bcrypt = require("bcrypt");

const getUserProfile = async (req, res) => {
  try {
    const user = await findUserById(req.user.id);
    res.json({ name: user.name, email: user.email });
  } catch (err) {
    res.status(500).json(err);
  }
};

const updateUserProfile = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const hashedPassword = password ? await bcrypt.hash(password, 10) : null;
    await updateUser(req.user.id, name, email, hashedPassword, req.user.role);
    res.send("Profile updated");
  } catch (err) {
    res.status(500).json(err);
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await getAllUsers();
    res.json(users);
  } catch (err) {
    res.status(500).json(err);
  }
};

const getUserById = async (req, res) => {
  try {
    const user = await findUserById(req.params.id);
    res.json(user);
  } catch (err) {
    res.status(500).json(err);
  }
};

const updateUser = async (req, res) => {
  const { name, email, role } = req.body;
  try {
    await updateUser(req.params.id, name, email, null, role);
    res.send("User details updated");
  } catch (err) {
    res.status(500).json(err);
  }
};

const deleteUser = async (req, res) => {
  try {
    await deleteUser(req.params.id);
    res.send("User deleted");
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  getUserProfile,
  updateUserProfile,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
};
