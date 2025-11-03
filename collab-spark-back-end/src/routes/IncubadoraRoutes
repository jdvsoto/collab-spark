import { Router } from "express";
import {
  createIncubadora,
  getIncubadoras,
  deleteIncubadora,
  updateIncubadora,
} from "../controllers/incubadoraController.js";

export function incubadoraRoutes() {
  const router = Router();

  router.post("/create-incubadora", (req, res) => {
    try {
      const nuevaIncubadora = createIncubadora(req.body);
      return res.status(201).json({
        success: true,
        incubadora: nuevaIncubadora,
      });
    } catch (err) {
      const status =
        err.message && err.message.includes("Faltan datos") ? 400 : 500;
      return res.status(status).json({
        success: false,
        error: err.message || "Error al crear la incubadora",
      });
    }
  });

  router.get("/get-incubadoras", (req, res) => {
    const incubadoras = getIncubadoras();
    return res.status(200).json({
      success: true,
      incubadoras,
    });
  });

  router.delete("/delete-incubadora", (req, res) => {
    // Siguiendo el modelo de usar req.body.nombre para delete
    const deleted = deleteIncubadora(req.body.nombre);
    if (deleted) {
      return res.status(200).json({
        success: true,
        message: "Incubadora eliminada",
      });
    }
    return res.status(404).json({
      success: false,
      error: "Incubadora no encontrada",
    });
  });

  router.put("/update-incubadora/:nombre", (req, res) => {
    try {
      const nombreABuscar = req.params.nombre;
      const updatedIncubadora = updateIncubadora(nombreABuscar, req.body);
      return res.status(200).json({
        success: true,
        incubadora: updatedIncubadora,
      });
    } catch (err) {
      const status =
        err.message && err.message.includes("no encontrada") ? 404 : 500;
      return res.status(status).json({
        success: false,
        error: err.message || "Error al actualizar la incubadora",
      });
    }
  });

  return router;
}