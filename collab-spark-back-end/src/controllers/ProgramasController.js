import Programas from "../models/ProgramasModel.js";

/**
 * Crea un nuevo programa y lo guarda en MongoDB
 */
export const createPrograma = async (data) => {
  try {
    if (!data.nombre || !data.tipoPrograma || data.fondos === undefined) {
      throw new Error(
        "Faltan datos (nombre, tipoPrograma, fondos) para crear el programa"
      );
    }

    const newPrograma = new Programas(data);
    await newPrograma.save();
    return newPrograma;
  } catch (error) {
    throw error;
  }
};

/**
 * Devuelve todos los programas desde MongoDB
 */
export const getProgramas = async () => {
  try {
    return await Programas.find();
  } catch (error) {
    throw error;
  }
};

/**
 * Elimina un programa por su nombre
 */
export const deletePrograma = async (nombre) => {
  try {
    const result = await Programas.findOneAndDelete({ nombre: nombre });
    return result ? true : false;
  } catch (error) {
    throw error;
  }
};

/**
 * Actualiza un programa por su nombre
 */
export const updatePrograma = async (nombre, updatedData) => {
  try {
    const programa = await Programas.findOneAndUpdate(
      { nombre: nombre },
      updatedData,
      { new: true, runValidators: true }
    );

    if (!programa) {
      throw new Error("Programa no encontrado");
    }

    console.log("Programa actualizado:", programa);
    return programa;
  } catch (error) {
    throw error;
  }
};
