import ProyectoEscalable from "../models/ProyectoEscalableModel.js";

// Crear un nuevo proyecto escalable
export const createProyectoEscalable = async (proyectoData) => {
  try {
    if (!proyectoData.Etapas || !proyectoData.Presupuesto) {
      throw new Error("Faltan datos para crear el proyecto escalable");
    }

    const newProyecto = new ProyectoEscalable(proyectoData);
    await newProyecto.save();
    return newProyecto;
  } catch (error) {
    throw error;
  }
};

// Obtener todos los proyectos escalables
export const getProyectosEscalables = async () => {
  try {
    return await ProyectoEscalable.find();
  } catch (error) {
    throw error;
  }
};

// Eliminar un proyecto escalable por nombre
export const deleteProyectoEscalable = async (nombre) => {
  try {
    const result = await ProyectoEscalable.findOneAndDelete({ Nombre: nombre });
    return result ? true : false;
  } catch (error) {
    throw error;
  }
};

// Actualizar un proyecto escalable por nombre
export const updateProyectoEscalable = async (nombre, updatedData) => {
  try {
    const proyecto = await ProyectoEscalable.findOneAndUpdate(
      { Nombre: nombre },
      updatedData,
      { new: true, runValidators: true }
    );
    
    if (!proyecto) {
      throw new Error("Proyecto escalable no encontrado");
    }
    
    console.log('Proyecto escalable actualizado:', proyecto);
    return proyecto;
  } catch (error) {
    throw error;
  }
};

