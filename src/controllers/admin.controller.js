import { getAllAdmins, createAdmin } from "../services/admin.service.js";

export const getAdminsController = (req, res) => {
  try {
    const users = getAllAdmins();
    res.status(200).json({ success: true, data: users });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const creatAdminController = (req, res) => {
  try {
    const user = createAdmin(req);
    res.status(200).json({ success: true, data: user });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
