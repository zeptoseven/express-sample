import { getAllUsers, createUser } from "../services/user.service.js";

export const getAllUsersController = (req, res) => {
  try {
    const users = getAllUsers();
    res.status(200).json({ success: true, data: users });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });ß
  }
};

export const createUserController = (req, res) => {
  try {
    const user = createUser(req);
    res.status(200).json({ success: true, data: user });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
