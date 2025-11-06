import mongoose from 'mongoose';
import { recursoBaseSchema } from './RecursosModel.js';

// Schema de Fondos que extiende el schema base de recursos
const fondosSchema = new mongoose.Schema({
  ...recursoBaseSchema,
  tipoFondo: {
    type: String,
    required: [true, 'El tipo de fondo es requerido'],
    trim: true
  },
  fondos: {
    type: String, // Mantener como String para soportar rangos como "10000€ - 50000€"
    required: [true, 'Los fondos son requeridos'],
    trim: true
  }
}, {
  timestamps: true,
  versionKey: false
});

// Crear el modelo
const Fondos = mongoose.model('Fondos', fondosSchema);

export default Fondos;
