import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    // Conectar a MongoDB usando la URL de tu archivo .env
    await mongoose.connect(process.env.MONGO_URI);
    
    console.log('✅ MongoDB conectado exitosamente');
  } catch (error) {
    console.error('❌ Error al conectar a MongoDB:', error.message);
    // Si falla la conexión, salir del proceso
    process.exit(1);
  }
};

// Escuchar eventos de la conexión
mongoose.connection.on('connected', () => {
  console.log('🔗 Mongoose conectado a MongoDB');
});

mongoose.connection.on('error', (err) => {
  console.error('❌ Error de conexión de Mongoose:', err);
});

mongoose.connection.on('disconnected', () => {
  console.log('🔌 Mongoose desconectado de MongoDB');
});

export default connectDB;
