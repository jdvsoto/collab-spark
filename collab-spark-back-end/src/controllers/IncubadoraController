import { Incubadora } from "../models/IncubadoraModel.js";

// Array en memoria para almacenar las incubadoras
export const incubadoras = [];

/**
 * Crea una nueva incubadora y la añade al array.
 */
export const createIncubadora = (data) => {
  // Validación simple basada en el constructor [cite: 2]
  // [cite: 2, 3, 4]
  if (!data.nombre || !data.tipoIncubadora || data.inversion === undefined) {
    throw new Error(
      "Faltan datos (nombre, tipoIncubadora, inversion) para crear la incubadora"
    );
  }

  // El constructor de Incubadora espera un objeto [cite: 2]
  const newIncubadora = new Incubadora(data);
  incubadoras.push(newIncubadora);
  return newIncubadora.toJSON(); // [cite: 6]
};

/**
 * Devuelve todas las incubadoras.
 */
export const getIncubadoras = () => {
  return incubadoras.map((inc) => inc.toJSON());
};

/**
 * Elimina una incubadora por su nombre.
 * (Asume que la clase base 'Recursos' hace 'nombre' accesible)
 */
export const deleteIncubadora = (nombre) => {
  const index = incubadoras.findIndex((inc) => inc.nombre === nombre);
  if (index !== -1) {
    incubadoras.splice(index, 1);
    return true;
  }
  return false;
};

/**
 * Actualiza una incubadora.
 * Sigue el patrón del ejemplo usando Object.assign.
 */
export const updateIncubadora = (nombre, updatedData) => {
  const incubadora = incubadoras.find((inc) => inc.nombre === nombre);
  if (!incubadora) {
    throw new Error("Incubadora no encontrada");
  }

  // NOTA: Object.assign solo actualizará propiedades públicas (probablemente de la clase base 'Recursos').
  // No puede actualizar los campos privados '#tipoIncubadora' o '#inversion' [cite: 3, 4]
  // porque los modelos no tienen setters para ellos.
  Object.assign(incubadora, updatedData);

  console.log("Incubadora actualizada:", incubadora);
  return incubadora.toJSON();
};