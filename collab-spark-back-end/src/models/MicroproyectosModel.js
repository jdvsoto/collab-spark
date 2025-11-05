import mongoose from 'mongoose';
import { proyectoBaseSchema } from './ProyectosModel.js';

// Schema de Microproyectos que extiende el schema base
const microproyectoSchema = new mongoose.Schema({
  ...proyectoBaseSchema,
  objetivo: {
    type: String,
    required: [true, 'El objetivo es requerido'],
    trim: true
  }
}, {
  timestamps: true,
  versionKey: false
});

// Establecer el tipo como 'Microproyecto' automáticamente
microproyectoSchema.pre('save', function(next) {
  this.Tipo = 'Microproyecto';
  next();
});

// Crear el modelo
const Microproyecto = mongoose.model('Microproyecto', microproyectoSchema);

export default Microproyecto;
