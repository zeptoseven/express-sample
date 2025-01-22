import { User } from "../models/user.model.js";
import { hashPassword } from "../utils/helpers.js";

export const getAllUsers = (request, response) => {
  const users = [
    {
      name: "Chandler Bing",
      position: "Employee",
      country: "USA",
    },
    {
      name: "Ross Geller",
      position: "Manager",
      country: "USA",
    },
  ];
  return users;
};

export const createUser = async (request) => {
  const { email, password, country } = request.body;
  const hashed = hashPassword(password);
  const newUser = new User({ email, password: hashed, country });
  try {
    const savedUser = await newUser.save();
    return savedUser;
  } catch (err) {
    throw new Error(err);
  }
};
