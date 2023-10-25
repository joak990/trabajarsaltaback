const Publication = require("../models/publication");
const moment = require('moment-timezone');
const createPost = async (user, content, phone, salary) => {
  try {

    const fechaActual = moment().tz('America/Argentina/Buenos_Aires');
  const fechaPublicacion = fechaActual.format('DD-MM-YYYY HH:mm:ss');
  const fechaDb = fechaActual.format('DD-MM-YYYY ');
  const fechaVencimiento = moment().add(1, 'days').format('DD-MM-YYYY HH:mm:ss');
  const existingUser = await Publication.findOne({ user: user });
   if(existingUser){
    return false
   }
    const newPost = new Publication({
      user: user, 
      content: content,
      phone: phone,
      salary: salary,
      FechaPublicacion:fechaPublicacion,
      FechaLimite:fechaVencimiento,
      FechaDB:fechaDb,
      

      
    });



   
    await newPost.save();

    return newPost; 
  } catch (error) {
    console.error('Error al crear publicación:', error);
    throw error;
  }
}




// Función para eliminar las publicaciones vencidas
const eliminarPublicacionesVencidas = async () => {
  try {
    const fechaActual = moment().tz('America/Argentina/Buenos_Aires');
    const fechaLimiteFormateada = fechaActual.format('DD-MM-YYYY HH:mm:ss')
    
    console.log(fechaLimiteFormateada);
    const numDocumentosEliminados = await Publication.deleteMany({ FechaLimite: { $lt: fechaLimiteFormateada } });
    console.log('Documentos vencidos eliminados correctamente');
    console.log('Número de documentos eliminados:', numDocumentosEliminados.deletedCount);
  } catch (error) {
    console.error('Error al eliminar los documentos vencidos:', error);
  }
};

// Programa la tarea para ejecutar la función cada 10 segundos (10000 ms)
setInterval(eliminarPublicacionesVencidas, 10000);


module.exports = createPost;