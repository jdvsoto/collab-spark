import { Router } from "express";
import {
  createIncubadora,
  getIncubadoras,
  deleteIncubadora,
  updateIncubadora,
} from "../controllers/IncubadoraController.js";

export function incubadoraRoutes() {
  const router = Router();

  router.post("/create-incubadora", async (req, res) => {
    try {
      const nuevaIncubadora = await createIncubadora(req.body);
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

  router.get("/get-incubadoras", async (req, res) => {
    try {
      const incubadoras = await getIncubadoras();
      return res.status(200).json({
        success: true,
        incubadoras,
      });
    } catch (err) {
      return res.status(500).json({
        success: false,
        error: err.message || "Error al obtener incubadoras",
      });
    }
  });

  router.delete("/delete-incubadora", async (req, res) => {
    try {
      const deleted = await deleteIncubadora(req.body.nombre);
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
    } catch (err) {
      return res.status(500).json({
        success: false,
        error: err.message || "Error al eliminar incubadora",
      });
    }
  });

  router.put("/update-incubadora/:nombre", async (req, res) => {
    try {
      const nombreABuscar = req.params.nombre;
      const updatedIncubadora = await updateIncubadora(nombreABuscar, req.body);
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