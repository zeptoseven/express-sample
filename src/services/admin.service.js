import { Admin } from "../models/admin.model.js";

export const getAllAdmins = (request, response) => {
  const users = [
    {
      name: "Admin",
      position: "Super Admin",
    },
    {
      name: "Sub admin",
      position: "Manager",
    },
  ];
  return users;
};

export const createAdmin = async (request) => {
  const { name, position } = request.body;
  const newAdmin = new Admin({ name, position });
  try {
    const savedAdmin = await newAdmin.save();
    return savedAdmin;
  } catch (err) {
    throw new Error(err);
  }
};
