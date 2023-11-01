
const Publication = require("../models/publication");
const moment = require('moment-timezone');

const createPost = async (user, content, phone, salary) => {
  try {
    const fechaActual = moment().tz('America/Argentina/Buenos_Aires');
    const fechaPublicacion = fechaActual.format('DD-MM-YYYY');
    const fechaDb = fechaActual.format('DD-MM-YYYY');
    const fechaVencimiento = fechaActual.clone().add(1, 'days').format('MM-DD-YYYY');

    console.log(fechaVencimiento,"venciggggggggggggggg");
    const existingUser = await Publication.findOne({ user: user });
    
    if (existingUser) {
      return false;
    }
    
    const newPost = new Publication({
      user: user, 
      content: content,
      phone: phone,
      salary: salary,
      FechaPubli: fechaPublicacion,
      FechaLimi: fechaVencimiento,
      FechaDB: fechaDb,
    })
   
    await newPost.save();
    
    return newPost; 
  } catch (error) {
    console.error('Error al crear publicación:', error);
    throw error;
  }
};

const eliminarPublicacionesVencidas = async () => {
  try {
    const fecha = "10-08-2023"
    const allPublicationDates = await Publication.find({}, 'FechaLimi');

console.log(allPublicationDates);
const fechaLimite = moment().tz('America/Argentina/Buenos_Aires').format('MM-DD-YYYY');


const numDocumentosEliminados = await Publication.deleteMany({ FechaLimi: { $lt: fechaLimite } })
    console.log('Documentos vencidos eliminados correctamente');
    console.log(fechaLimite);
    console.log('Número de documentos eliminados:', numDocumentosEliminados.deletedCount);
  } catch (error) {
    console.error('Error al eliminar los documentos vencidos:', error);
  }
};

// Programa la tarea para ejecutar la función cada 10 segundos (10000 ms)
setInterval(eliminarPublicacionesVencidas, 120000);
module.exports = createPost;
