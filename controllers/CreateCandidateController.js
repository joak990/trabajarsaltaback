const Candidate = require("../models/candidate");
const moment = require('moment-timezone');
const createcandidate = async (user,name,city,description,curriculum,phone,sector) => {
    try {
  
      const fechaActual = moment().tz('America/Argentina/Buenos_Aires');
    const fechaPublicacion = fechaActual.format('DD-MM-YYYY HH:mm:ss');
    const fechaDb = fechaActual.format('DD-MM-YYYY ');
    const fechaVencimiento = moment().add(1, 'days').format('DD-MM-YYYY HH:mm:ss');
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
        FechaPublicacion:fechaPublicacion,
        FechaLimite:fechaVencimiento,
        FechaDB:fechaDb,
        
 
        
      });
  
        
  
     
      await newCandidate.save();
  
      return true; 
    } catch (error) {
      console.error('Error al crear publicación:', error);
      throw error;
    }
  }
  
  module.exports = createcandidate