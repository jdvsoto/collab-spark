import express from "express";
import cors from "cors";
import { authRoutes } from "./routes/authRoutes.js";
import { proyectoEscalableRoutes } from "./routes/proyectoEscalableRoutes.js";
import { microproyectosRoutes } from "./routes/microProyectosRoutes.js";

const app = express();

app.use(express.json());

app.use(cors());

app.use("/api/auth", authRoutes());
app.use("/api/proyecto-escalable", proyectoEscalableRoutes());
app.use("/api/microproyectos", microproyectosRoutes());

export default app;
