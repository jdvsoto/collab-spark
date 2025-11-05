import { Router } from "express";
import {
  createPrograma,
  getProgramas,
  deletePrograma,
  updatePrograma,
} from "../controllers/ProgramasController.js";

export function programasRoutes() {
  const router = Router();

  router.post("/create-programa", async (req, res) => {
    try {
      const nuevoPrograma = await createPrograma(req.body);
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

  router.get("/get-programas", async (req, res) => {
    try {
      const programas = await getProgramas();
      return res.status(200).json({
        success: true,
        programas,
      });
    } catch (err) {
      return res.status(500).json({
        success: false,
        error: err.message || "Error al obtener programas",
      });
    }
  });

  router.delete("/delete-programa", async (req, res) => {
    try {
      const deleted = await deletePrograma(req.body.nombre);
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
    } catch (err) {
      return res.status(500).json({
        success: false,
        error: err.message || "Error al eliminar programa",
      });
    }
  });

  router.put("/update-programa/:nombre", async (req, res) => {
    try {
      const nombreABuscar = req.params.nombre;
      const updatedPrograma = await updatePrograma(nombreABuscar, req.body);
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