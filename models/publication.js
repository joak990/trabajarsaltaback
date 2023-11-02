const mongoose = require('mongoose');



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
    type: String,
    required: true,
  },
  sector: {
    type: String,
    required: true,
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
  FechaPubli: {
    type: String,
    default: false,
  },
  FechaLimi: {
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