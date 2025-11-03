import { Router } from "express";
import {
  createPrograma,
  getProgramas,
  deletePrograma,
  updatePrograma,
} from "../controllers/ProgramasController.js";

export function programasRoutes() {
  const router = Router();

  router.post("/create-programa", (req, res) => {
    try {
      const nuevoPrograma = createPrograma(req.body);
      return res.status(201).json({
        success: true,
        programa: nuevoPrograma,
      });
    } catch (err) {
      const status =
        err.message && err.message.includes("Faltan datos") ? 400 : 500;
      return res.status(status).json({
        success: false,
        error: err.message || "Error al crear el programa",
      });
    }
  });

  router.get("/get-programas", (req, res) => {
    const programas = getProgramas();
    return res.status(200).json({
      success: true,
      programas,
    });
  });

  router.delete("/delete-programa", (req, res) => {
    // Siguiendo el modelo de usar req.body.nombre para delete
    const deleted = deletePrograma(req.body.nombre);
    if (deleted) {
      return res.status(200).json({
        success: true,
        message: "Programa eliminado",
      });
    }
    return res.status(404).json({
      success: false,
      error: "Programa no encontrado",
    });
  });

  router.put("/update-programa/:nombre", (req, res) => {
    try {
      const nombreABuscar = req.params.nombre;
      const updatedPrograma = updatePrograma(nombreABuscar, req.body);
      return res.status(200).json({
        success: true,
        programa: updatedPrograma,
      });
    } catch (err) {
      const status =
        err.message && err.message.includes("no encontrado") ? 404 : 500;
      return res.status(status).json({
        success: false,
        error: err.message || "Error al actualizar el programa",
      });
    }
  });

  return router;
}