import {
  ProyectoEscalable,
  proyectosEscalables,
} from "../models/ProyectoEscalableModel.js";

export const createProyectoEscalable = (proyectoData) => {
  if (!proyectoData.Etapas || !proyectoData.Presupuesto) {
    throw new Error("Faltan datos para crear el proyecto escalable");
  }

  const {
    Nombre,
    Duracion,
    Modalidad,
    Tecnologias,
    Categoria,
    Participantes,
    Descripcion,
    Etapas,
    Presupuesto,
  } = proyectoData;
  const newProyecto = new ProyectoEscalable(
    Nombre,
    Duracion,
    Modalidad,
    Tecnologias,
    Categoria,
    Participantes,
    Descripcion,
    Etapas,
    Presupuesto
  );
  proyectosEscalables.push(newProyecto);
  return newProyecto.toJSON();
};

export const getProyectosEscalables = () => {
  return proyectosEscalables.map((proyecto) => proyecto.toJSON());
};

export const deleteProyectoEscalable = (nombre) => {
    const index = proyectosEscalables.findIndex(proyecto => proyecto.Nombre === nombre);
    if (index !== -1) {
        proyectosEscalables.splice(index, 1);
        return true;
    }
    return false;
};

export const updateProyectoEscalable = (nombre, updatedData) => {
    const proyecto = proyectosEscalables.find(proyecto => proyecto.Nombre === nombre);
    if (!proyecto) {
        throw new Error("Proyecto escalable no encontrado");
    }
    Object.assign(proyecto, updatedData);
    console.log('Proyecto escalable actualizado:', proyecto);
    return proyecto.toJSON();
};
