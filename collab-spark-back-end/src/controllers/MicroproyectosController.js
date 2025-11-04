import {
    Microproyectos,
    microproyectos,
} from "../models/MicroproyectosModel.js";

export const createMicroproyecto = (microproyectoData) => {
    if (!microproyectoData.objetivo) {
        throw new Error("Faltan datos para crear el microproyecto");
    }
    const {
        Nombre,
        Duracion,
        Modalidad,
        Tecnologias,
        Categoria,
        Participantes,
        Descripcion,
        objetivo,
    } = microproyectoData;
    const newMicroproyecto = new Microproyectos(
        Nombre,
        Duracion,
        Modalidad,
        Tecnologias,
        Categoria,
        Participantes,
        Descripcion,
        objetivo
    );
    microproyectos.push(newMicroproyecto);
    return newMicroproyecto.toJSON();
};
export const getMicroproyectos = () => {
    return microproyectos.map((microproyecto) => microproyecto.toJSON());
};
export const deleteMicroproyecto = (nombre) => {
    const index = microproyectos.findIndex(microproyecto => microproyecto.Nombre === nombre);
    if (index !== -1) {
        microproyectos.splice(index, 1);
        return true;
    }
    return false;
};
export const updateMicroproyecto = (nombre, updatedData) => {
    const microproyecto = microproyectos.find(microproyecto => microproyecto.Nombre === nombre);
    if (!microproyecto) {
        throw new Error("Microproyecto no encontrado");
    }
    Object.assign(microproyecto, updatedData);
    console.log('Microproyecto actualizado:', microproyecto);
    return microproyecto.toJSON();
};