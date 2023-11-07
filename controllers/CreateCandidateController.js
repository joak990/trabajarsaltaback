const Candidate = require("../models/candidate");
const moment = require('moment-timezone');
const createcandidate = async (user,name,city,description,phone,sector,curriculum) => {
    try {
  
      const fechaActual = moment().tz('America/Argentina/Buenos_Aires');
    const fechaPublicacion = fechaActual.format('DD-MM-YYYY');
    const fechaDb = fechaActual.format('DD-MM-YYYY ');
    const fechaVencimiento = moment().add(1, 'days').format('MM-DD-YYYY');
    const existingUser = await Candidate.findOne({ user: user });
    if(existingUser){
      return false
    }
     
      const newCandidate = new Candidate({
        user:user,
        name: name, 
        city: city,
        description: description,
       curriculum:curriculum,
        phone: phone,
        sector:sector,
        FechaPubli:fechaPublicacion,
        FechaLimi:fechaVencimiento,
        FechaDB:fechaDb,
        
 
        
      });
  
        
  
     
      await newCandidate.save();
  
      return newCandidate; 
    } catch (error) {
      console.error('Error al crear publicación:', error);
      throw error;
    }
  }
  

  const eliminarCandidatosVencidos = async () => {
    try {
      const fechaActual = moment().tz('America/Argentina/Buenos_Aires');
      const fechaLimiteFormateada = fechaActual.format('MM-DD-YYYY ');
      console.log('Fecha actual:', fechaLimiteFormateada);
  
      // Eliminar candidatos cuya FechaLimite sea menor a la fecha actual
      const numCandidatosEliminados = await Candidate.deleteMany({ FechaLimi: { $lt: fechaLimiteFormateada } });
      console.log('Candidatos vencidos eliminados correctamente');
      console.log('Número de candidatos eliminados:', numCandidatosEliminados.deletedCount);
    } catch (error) {
      console.error('Error al eliminar los candidatos vencidos:', error);
    }
  };
  
  // Programar la tarea para ejecutar la función cada X segundos (ajusta el valor a tu preferencia)
  setInterval(eliminarCandidatosVencidos, 120000); 
  module.exports = createcandidate