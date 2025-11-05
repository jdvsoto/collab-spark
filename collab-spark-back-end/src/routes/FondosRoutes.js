import { Router } from "express";
import {
  createFondo,
  getFondos,
  deleteFondo,
  updateFondo,
} from "../controllers/FondosController.js";

export function fondosRoutes() {
  const router = Router();

  router.post("/create-fondo", async (req, res) => {
    try {
      const nuevoFondo = await createFondo(req.body);
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

  router.get("/get-fondos", async (req, res) => {
    try {
      const fondos = await getFondos();
      return res.status(200).json({
        success: true,
        fondos,
      });
    } catch (err) {
      return res.status(500).json({
        success: false,
        error: err.message || "Error al obtener fondos",
      });
    }
  });

  router.delete("/delete-fondo", async (req, res) => {
    try {
      const deleted = await deleteFondo(req.body.nombre);
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
    } catch (err) {
      return res.status(500).json({
        success: false,
        error: err.message || "Error al eliminar fondo",
      });
    }
  });

  router.put("/update-fondo/:nombre", async (req, res) => {
    try {
      const nombreABuscar = req.params.nombre;
      const updatedFondo = await updateFondo(nombreABuscar, req.body);
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