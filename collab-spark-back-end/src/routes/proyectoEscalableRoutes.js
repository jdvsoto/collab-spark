import { Router } from "express";
import {
  createProyectoEscalable,
  getProyectosEscalables,
  deleteProyectoEscalable,
  updateProyectoEscalable,
} from "../controllers/proyectoEscalableController.js";

export function proyectoEscalableRoutes() {
  const router = Router();

  router.post("/create-proyecto-escalable", (req, res) => {
    try {
      const nuevoProyecto = createProyectoEscalable(req.body);
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

  router.get("/get-proyectos-escalables", (req, res) => {
    const proyectos = getProyectosEscalables();
    return res.status(200).json({
      success: true,
      proyectos,
    });
  });

  router.delete("/delete-proyecto-escalable", (req, res) => {
    const deleted = deleteProyectoEscalable(req.body.nombre);
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
  });

  router.put("/update-proyecto-escalable/:nombre", (req, res) => {
    try {
      const nombreABuscar = req.params.nombre;
      const updatedProyecto = updateProyectoEscalable(nombreABuscar, req.body);
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
