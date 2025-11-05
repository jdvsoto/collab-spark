import mongoose from 'mongoose';
import { proyectoBaseSchema } from './ProyectosModel.js';

// Schema de Proyecto Escalable que extiende el schema base
const proyectoEscalableSchema = new mongoose.Schema({
  ...proyectoBaseSchema,
  Etapas: {
    type: String,
    required: [true, 'Las etapas son requeridas'],
    validate: {
      validator: function(v) {
        return v && v.length > 0;
      },
      message: 'Debe haber al menos una etapa'
    }
  },
  Presupuesto: {
    type: String,
    required: [true, 'El presupuesto es requerido'],
    min: [0, 'El presupuesto no puede ser negativo']
  }
}, {
  timestamps: true,
  versionKey: false
});

// Establecer el tipo como 'Escalable' automáticamente
proyectoEscalableSchema.pre('save', function(next) {
  this.Tipo = 'Escalable';
  next();
});

// Crear el modelo
const ProyectoEscalable = mongoose.model('ProyectoEscalable', proyectoEscalableSchema);

export default ProyectoEscalable;
