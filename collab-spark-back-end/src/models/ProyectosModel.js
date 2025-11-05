import mongoose from 'mongoose';

// Schema base para todos los proyectos
const proyectoBaseSchema = {
  Nombre: {
    type: String,
    required: [true, 'El nombre es requerido'],
    trim: true
  },
  Tipo: {
    type: String,
    enum: ['Microproyecto', 'Escalable'],
    default: 'Microproyecto'
  },
  Duracion: {
    type: String,
    required: [true, 'La duración es requerida'],
    trim: true
  },
  Modalidad: {
    type: String,
    required: [true, 'La modalidad es requerida'],
    trim: true
  },
  Tecnologias: {
    type: [String],
    default: []
  },
  Categoria: {
    type: String,
    required: [true, 'La categoría es requerida'],
    trim: true
  },
  Participantes: {
    type: [String],
    default: []
  },
  Descripcion: {
    type: String,
    required: [true, 'La descripción es requerida'],
    trim: true
  }
};

export { proyectoBaseSchema };
