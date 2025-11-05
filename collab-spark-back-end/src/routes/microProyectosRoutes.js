import { Router } from "express";
import {
    createMicroproyecto,
    getMicroproyectos,
    deleteMicroproyecto,
    updateMicroproyecto,
} from "../controllers/MicroproyectosController.js";

export function microproyectosRoutes() {
    const router = Router();
    
    router.post("/create-microproyecto", async (req, res) => {
        try {
            const nuevoMicroproyecto = await createMicroproyecto(req.body);
            return res.status(201).json({
                success: true,
                microproyecto: nuevoMicroproyecto,
            });
        } catch (err) {
            const status =
                err.message && err.message.includes("Faltan datos") ? 400 : 500;
            return res.status(status).json({
                success: false,
                error: err.message || "Error al crear el microproyecto",
            });
        }
    });

    router.get("/get-microproyectos", async (req, res) => {
        try {
            const microproyectos = await getMicroproyectos();
            return res.status(200).json({
                success: true,
                microproyectos,
            });
        } catch (err) {
            return res.status(500).json({
                success: false,
                error: err.message || "Error al obtener microproyectos",
            });
        }
    }); 
    
    router.delete("/delete-microproyecto", async (req, res) => {
        try {
            const deleted = await deleteMicroproyecto(req.body.nombre);
            if (deleted) {
                return res.status(200).json({
                    success: true,
                    message: "Microproyecto eliminado",
                });
            }
            return res.status(404).json({
                success: false,
                error: "Microproyecto no encontrado",
            });
        } catch (err) {
            return res.status(500).json({
                success: false,
                error: err.message || "Error al eliminar microproyecto",
            });
        }
    });

    router.put("/update-microproyecto/:nombre", async (req, res) => {
        try {
            const nombreABuscar = req.params.nombre;
            const updatedMicroproyecto = await updateMicroproyecto(nombreABuscar, req.body);
            return res.status(200).json({
                success: true,
                microproyecto: updatedMicroproyecto,
            });
        } catch (err) {
            const status = 
                err.message && err.message.includes("no encontrado") ? 404 : 500;
            return res.status(status).json({
                success: false,
                error: err.message || "Error al actualizar el microproyecto",
            });
        } 
    });
    
    return router;
}