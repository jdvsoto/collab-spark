import { User, users } from "../models/userModel.js";

export const registerUser = (userData) => {
  const newUser = new User(userData);
  users.push(newUser);
  return newUser;
};

export const loginUser = (email, password) => {
  const user = users.find((u) => u.email === email);
  if (user && user.passwordHash === password) {
    return user;
  }
  return null;
};

export const getAllUsers = () => {
  return users;
};

export const deleteUser = (id) => {
  const user = users.find((u) => u.id === id);
  if (user) {
    const index = users.indexOf(user);
    users.splice(index, 1);
    return true;
  }
  return false;
};