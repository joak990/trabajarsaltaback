
const mongoose = require('mongoose');



// Definición del esquema de Publication
const CandidateSchema = new mongoose.Schema({
  // Referencia a la tabla User
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  sector: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  curriculum: {
    type: String,
    required: true,
  },
  phone: {
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
const Candidate = mongoose.model('Candidate', CandidateSchema);

module.exports = Candidate;