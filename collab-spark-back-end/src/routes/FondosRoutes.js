import { Router } from "express";
import {
  createFondo,
  getFondos,
  deleteFondo,
  updateFondo,
} from "../controllers/fondosController.js";

export function fondosRoutes() {
  const router = Router();

  router.post("/create-fondo", (req, res) => {
    try {
      const nuevoFondo = createFondo(req.body);
      return res.status(201).json({
        success: true,
        fondo: nuevoFondo,
      });
    } catch (err) {
      const status =
        err.message && err.message.includes("Faltan datos") ? 400 : 500;
      return res.status(status).json({
        success: false,
        error: err.message || "Error al crear el fondo",
      });
    }
  });

  router.get("/get-fondos", (req, res) => {
    const fondos = getFondos();
    return res.status(200).json({
      success: true,
      fondos,
    });
  });

  router.delete("/delete-fondo", (req, res) => {
    // Siguiendo el modelo de usar req.body.nombre para delete
    const deleted = deleteFondo(req.body.nombre);
    if (deleted) {
      return res.status(200).json({
        success: true,
        message: "Fondo eliminado",
      });
    }
    return res.status(404).json({
      success: false,
      error: "Fondo no encontrado",
    });
  });

  router.put("/update-fondo/:nombre", (req, res) => {
    try {
      const nombreABuscar = req.params.nombre;
      const updatedFondo = updateFondo(nombreABuscar, req.body);
      return res.status(200).json({
        success: true,
        fondo: updatedFondo,
      });
    } catch (err) {
      const status =
        err.message && err.message.includes("no encontrado") ? 404 : 500;
      return res.status(status).json({
        success: false,
        error: err.message || "Error al actualizar el fondo",
      });
    }
  });

  return router;
}