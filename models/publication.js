const mongoose = require('mongoose');

// Definición del esquema de User (supongo que ya tienes este modelo)
const userSchema = new mongoose.Schema({
  // Define las propiedades del modelo User aquí
});

// Definición del esquema de Publication
const publicationSchema = new mongoose.Schema({
  // Referencia a la tabla User
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  salary: {
    type: Number,
    required: true,
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
  FechaPublicacion: {
    type: String,
    default: false,
  },
  FechaLimite: {
    type: String,
    default: false,
  },
  FechaDB: {
    type: String,
    default: false,
  },
});

// Crear el modelo de Publication
const Publication = mongoose.model('Publication', publicationSchema);

module.exports = Publication;