import Fondos from "../models/FondosModel.js";

/**
 * Crea un nuevo fondo y lo guarda en MongoDB
 */
export const createFondo = async (data) => {
  try {
    if (!data.nombre || !data.tipoFondo || data.fondos === undefined) {
      throw new Error(
        "Faltan datos (nombre, tipoFondo, fondos) para crear el fondo"
      );
    }

    const newFondo = new Fondos(data);
    await newFondo.save();
    return newFondo;
  } catch (error) {
    throw error;
  }
};

/**
 * Devuelve todos los fondos desde MongoDB
 */
export const getFondos = async () => {
  try {
    return await Fondos.find();
  } catch (error) {
    throw error;
  }
};

/**
 * Elimina un fondo por su nombre
 */
export const deleteFondo = async (nombre) => {
  try {
    const result = await Fondos.findOneAndDelete({ nombre: nombre });
    return result ? true : false;
  } catch (error) {
    throw error;
  }
};

/**
 * Actualiza un fondo por su nombre
 */
export const updateFondo = async (nombre, updatedData) => {
  try {
    const fondo = await Fondos.findOneAndUpdate(
      { nombre: nombre },
      updatedData,
      { new: true, runValidators: true }
    );

    if (!fondo) {
      throw new Error("Fondo no encontrado");
    }

    console.log("Fondo actualizado:", fondo);
    return fondo;
  } catch (error) {
    throw error;
  }
};
