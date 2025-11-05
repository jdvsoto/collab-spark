import { Programas } from "../models/ProgramasModel.js"; 

// Array en memoria para almacenar los programas
export const programas = [];

/**
 * Crea un nuevo programa y lo añade al array.
 */
export const createPrograma = (data) => {
  // Validación simple basada en el constructor [cite: 14]
  if (!data.nombre || !data.tipoPrograma || data.fondos === undefined) { 
    throw new Error(
      "Faltan datos (nombre, tipoPrograma, fondos) para crear el programa"
    );
  }

  // El constructor de Programas espera un objeto [cite: 14]
  const newPrograma = new Programas(data);
  programas.push(newPrograma);
  return newPrograma.toJSON(); 
};

/**
 * Devuelve todos los programas.
 */
export const getProgramas = () => {
  return programas.map((p) => p.toJSON()); 
};

/**
 * Elimina un programa por su nombre.
 * (Asume que la clase base 'Recursos' hace 'nombre' accesible)
 */
export const deletePrograma = (nombre) => {
  const index = programas.findIndex((p) => p.nombre === nombre);
  if (index !== -1) {
    programas.splice(index, 1);
    return true;
  }
  return false;
};

/**
 * Actualiza un programa.
 * Sigue el patrón del ejemplo usando Object.assign.
 */
export const updatePrograma = (nombre, updatedData) => {
  const programa = programas.find((p) => p.nombre === nombre);
  if (!programa) {
    throw new Error("Programa no encontrado");
  }

  // NOTA: Object.assign solo actualizará propiedades públicas (de 'Recursos').
  // No puede actualizar los campos privados '#tipoPrograma' o '#fondos' [cite: 15, 16]
  // porque los modelos no tienen setters.
  Object.assign(programa, updatedData);

  console.log("Programa actualizado:", programa);
  return programa.toJSON();
};