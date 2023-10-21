const Publication = require("../models/publication");
const moment = require('moment-timezone');
const createPost = async (user, content, phone, salary) => {
  try {

    const fechaActual = moment().tz('America/Argentina/Buenos_Aires');
  const fechaPublicacion = fechaActual.format('DD-MM-YYYY HH:mm:ss');
  const fechaDb = fechaActual.format('DD-MM-YYYY ');
  const fechaVencimiento = moment().add(1, 'days').format('DD-MM-YYYY HH:mm:ss');

   
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

module.exports = createPost;