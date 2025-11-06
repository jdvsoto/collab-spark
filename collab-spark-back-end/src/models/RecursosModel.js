import mongoose from 'mongoose';

// Schema base para todos los recursos
const recursoBaseSchema = {
  nombre: {
    type: String,
    required: [true, 'El nombre es requerido'],
    trim: true
  },
  descripcion: {
    type: String,
    required: [true, 'La descripción es requerida'],
    trim: true
  },
  tipo: {
    type: String,
    required: [true, 'El tipo es requerido'],
    trim: true
  },
  ubicacion: {
    type: String,
    required: [true, 'La ubicación es requerida'],
    trim: true
  },
  duracion: {
    type: String,
    required: [true, 'La duración es requerida'],
    trim: true
  },
  requisitos: {
    type: mongoose.Schema.Types.Mixed, // Puede ser String o Array
    required: [true, 'Los requisitos son requeridos']
  }
};

export { recursoBaseSchema };
