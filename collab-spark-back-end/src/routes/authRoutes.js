import { Router } from "express";
import {
  registerUser,
  loginUser,
  getAllUsers,
  deleteUser,
} from "../controllers/authController.js";

export function authRoutes() {
  const router = Router();
  router.post("/register", (req, res) => {
    const user = registerUser(req.body);
    res.status(201).json(user.toJSON());
  });

  router.post("/login", (req, res) => {
    const { email, password } = req.body;
    const user = loginUser(email, password);
    if (user) {
      res.status(200).json({
        message: "Login successful",
        user: user.toJSON(),
      });
    } else {
      res.status(401).json({ message: "Invalid credentials" });
    }
  });

  router.get("/users", (req, res) => {
    const users = getAllUsers();
    res.json(users.map((user) => user.toJSON()));
  });

  router.delete("/users/delete/:id", (req, res) => {
    const { id } = req.params;
    if (deleteUser(id)) {
      res.status(204).send();
    } else {
      res.status(404).json({ message: "User not found" });
    }
  });

  // Nuevo endpoint para obtener usuario por nombre
  router.get("/user/:name", (req, res) => {
    const { name } = req.params;
    const user = users.find(u => u.name === name);
    if (user) {
      res.json(user.toJSON());
    } else {
      res.status(404).json({ message: "User not found" });
    }
  });

  return router;
}
