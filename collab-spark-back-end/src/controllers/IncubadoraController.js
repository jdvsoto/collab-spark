import Incubadora from "../models/IncubadoraModel.js";

/**
 * Crea una nueva incubadora y la guarda en MongoDB
 */
export const createIncubadora = async (data) => {
  try {
    if (!data.nombre || !data.tipoIncubadora || data.inversion === undefined) {
      throw new Error(
        "Faltan datos (nombre, tipoIncubadora, inversion) para crear la incubadora"
      );
    }

    const newIncubadora = new Incubadora(data);
    await newIncubadora.save();
    return newIncubadora;
  } catch (error) {
    throw error;
  }
};

/**
 * Devuelve todas las incubadoras desde MongoDB
 */
export const getIncubadoras = async () => {
  try {
    return await Incubadora.find();
  } catch (error) {
    throw error;
  }
};

/**
 * Elimina una incubadora por su nombre
 */
export const deleteIncubadora = async (nombre) => {
  try {
    const result = await Incubadora.findOneAndDelete({ nombre: nombre });
    return result ? true : false;
  } catch (error) {
    throw error;
  }
};

/**
 * Actualiza una incubadora por su nombre
 */
export const updateIncubadora = async (nombre, updatedData) => {
  try {
    const incubadora = await Incubadora.findOneAndUpdate(
      { nombre: nombre },
      updatedData,
      { new: true, runValidators: true }
    );

    if (!incubadora) {
      throw new Error("Incubadora no encontrada");
    }

    console.log("Incubadora actualizada:", incubadora);
    return incubadora;
  } catch (error) {
    throw error;
  }
};
