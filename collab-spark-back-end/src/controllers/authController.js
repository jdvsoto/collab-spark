import { User, users } from "../models/userModel.js";

export const registerUser = (userData) => {
  const newUser = new User(userData);
  users.push(newUser);
  return newUser;
};

