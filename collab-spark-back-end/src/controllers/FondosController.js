import { Fondos } from "../models/FondosModel.js";

// Array en memoria para almacenar los fondos
export const fondos = [];

/**
 * Crea un nuevo fondo y lo añade al array.
 */
export const createFondo = (data) => {
  // Validación simple basada en el constructor [cite: 8]
  if (!data.nombre || !data.tipoFondo || data.fondos === undefined) { 
    throw new Error(
      "Faltan datos (nombre, tipoFondo, fondos) para crear el fondo"
    );
  }

  // El constructor de Fondos espera un objeto [cite: 8]
  const newFondo = new Fondos(data);
  fondos.push(newFondo);
  return newFondo.toJSON();
};

/**
 * Devuelve todos los fondos.
 */
export const getFondos = () => {
  return fondos.map((f) => f.toJSON());
};

/**
 * Elimina un fondo por su nombre.
 * (Asume que la clase base 'Recursos' hace 'nombre' accesible)
 */
export const deleteFondo = (nombre) => {
  const index = fondos.findIndex((f) => f.nombre === nombre);
  if (index !== -1) {
    fondos.splice(index, 1);
    return true;
  }
  return false;
};

/**
 * Actualiza un fondo.
 * Sigue el patrón del ejemplo usando Object.assign.
 */
export const updateFondo = (nombre, updatedData) => {
  const fondo = fondos.find((f) => f.nombre === nombre);
  if (!fondo) {
    throw new Error("Fondo no encontrado");
  }

  // NOTA: Object.assign solo actualizará propiedades públicas (de 'Recursos').
  // No puede actualizar los campos privados '#tipoFondo' o '#fondos' [cite: 9, 10]
  // porque los modelos no tienen setters.
  Object.assign(fondo, updatedData);

  console.log("Fondo actualizado:", fondo);
  return fondo.toJSON();
};