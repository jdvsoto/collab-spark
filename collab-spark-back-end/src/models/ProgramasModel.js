import mongoose from 'mongoose';
import { recursoBaseSchema } from './RecursosModel.js';

// Schema de Programas que extiende el schema base de recursos
const programasSchema = new mongoose.Schema({
  ...recursoBaseSchema,
  tipoPrograma: {
    type: String,
    required: [true, 'El tipo de programa es requerido'],
    trim: true
  },
  fondos: {
    type: String, // Mantener como String para soportar "$30,000 USD por equity del 5%"
    required: [true, 'Los fondos son requeridos'],
    trim: true
  }
}, {
  timestamps: true,
  versionKey: false
});

// Crear el modelo
const Programas = mongoose.model('Programas', programasSchema);

export default Programas;
