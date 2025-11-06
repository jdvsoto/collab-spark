import mongoose from 'mongoose';
import { recursoBaseSchema } from './RecursosModel.js';

// Schema de Incubadora que extiende el schema base de recursos
const incubadoraSchema = new mongoose.Schema({
  ...recursoBaseSchema,
  tipoIncubadora: {
    type: String,
    required: [true, 'El tipo de incubadora es requerido'],
    trim: true
  },
  inversion: {
    type: String, // Mantener como String para soportar "Hasta 30000€"
    required: [true, 'La inversión es requerida'],
    trim: true
  }
}, {
  timestamps: true,
  versionKey: false
});

// Crear el modelo
const Incubadora = mongoose.model('Incubadora', incubadoraSchema);

export default Incubadora;
