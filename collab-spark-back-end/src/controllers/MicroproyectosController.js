import Microproyecto from "../models/MicroproyectosModel.js";

// Crear un nuevo microproyecto
export const createMicroproyecto = async (microproyectoData) => {
    try {
        if (!microproyectoData.objetivo) {
            throw new Error("Faltan datos para crear el microproyecto");
        }
        
        const newMicroproyecto = new Microproyecto(microproyectoData);
        await newMicroproyecto.save();
        return newMicroproyecto;
    } catch (error) {
        throw error;
    }
};

// Obtener todos los microproyectos
export const getMicroproyectos = async () => {
    try {
        return await Microproyecto.find();
    } catch (error) {
        throw error;
    }
};

// Eliminar un microproyecto por nombre
export const deleteMicroproyecto = async (nombre) => {
    try {
        const result = await Microproyecto.findOneAndDelete({ Nombre: nombre });
        return result ? true : false;
    } catch (error) {
        throw error;
    }
};

// Actualizar un microproyecto por nombre
export const updateMicroproyecto = async (nombre, updatedData) => {
    try {
        const microproyecto = await Microproyecto.findOneAndUpdate(
            { Nombre: nombre },
            updatedData,
            { new: true, runValidators: true }
        );
        
        if (!microproyecto) {
            throw new Error("Microproyecto no encontrado");
        }
        
        console.log('Microproyecto actualizado:', microproyecto);
        return microproyecto;
    } catch (error) {
        throw error;
    }
};
