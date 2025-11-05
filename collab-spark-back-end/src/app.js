import express from "express";
import cors from "cors";
import { authRoutes } from "./routes/authRoutes.js";
import { proyectoEscalableRoutes } from "./routes/proyectoEscalableRoutes.js";
import { microproyectosRoutes } from "./routes/microProyectosRoutes.js";
import { fondosRoutes } from "./routes/FondosRoutes.js";
import { incubadoraRoutes } from "./routes/IncubadoraRoutes.js";
import { programasRoutes } from "./routes/ProgramasRoutes.js";

const app = express();

app.use(express.json());

app.use(cors());

app.use("/api/auth", authRoutes());
app.use("/api/proyecto-escalable", proyectoEscalableRoutes());
app.use("/api/microproyectos", microproyectosRoutes());
app.use("/api/fondos", fondosRoutes());
app.use("/api/incubadoras", incubadoraRoutes());
app.use("/api/programas", programasRoutes());

export default app;
