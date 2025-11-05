import { Router } from "express";
import {
  createProyectoEscalable,
  getProyectosEscalables,
  deleteProyectoEscalable,
  updateProyectoEscalable,
} from "../controllers/proyectoEscalableController.js";

export function proyectoEscalableRoutes() {
  const router = Router();

  router.post("/create-proyecto-escalable", async (req, res) => {
    try {
      const nuevoProyecto = await createProyectoEscalable(req.body);
      return res.status(201).json({
        success: true,
        proyecto: nuevoProyecto,
      });
    } catch (err) {
      const status =
        err.message && err.message.includes("Faltan datos") ? 400 : 500;
      return res.status(status).json({
        success: false,
        error: err.message || "Error al crear el proyecto escalable",
      });
    }
  });

  router.get("/get-proyectos-escalables", async (req, res) => {
    try {
      const proyectos = await getProyectosEscalables();
      return res.status(200).json({
        success: true,
        proyectos,
      });
    } catch (err) {
      return res.status(500).json({
        success: false,
        error: err.message || "Error al obtener proyectos escalables",
      });
    }
  });

  router.delete("/delete-proyecto-escalable", async (req, res) => {
    try {
      const deleted = await deleteProyectoEscalable(req.body.nombre);
      if (deleted) {
        return res.status(200).json({
          success: true,
          message: "Proyecto escalable eliminado",
        });
      }
      return res.status(404).json({
        success: false,
        error: "Proyecto escalable no encontrado",
      });
    } catch (err) {
      return res.status(500).json({
        success: false,
        error: err.message || "Error al eliminar proyecto escalable",
      });
    }
  });

  router.put("/update-proyecto-escalable/:nombre", async (req, res) => {
    try {
      const nombreABuscar = req.params.nombre;
      const updatedProyecto = await updateProyectoEscalable(nombreABuscar, req.body);
      return res.status(200).json({
        success: true,
        proyecto: updatedProyecto,
      });
    } catch (err) {
      const status =
        err.message && err.message.includes("no encontrado") ? 404 : 500;
      return res.status(status).json({
        success: false,
        error: err.message || "Error al actualizar el proyecto escalable",
      });
    }
  });

  return router;
}
