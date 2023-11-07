const Candidate = require("../models/candidate");

const getallcandidates = async () => {
  try {
    const candidates = await Candidate.find({});

    // Mapea los resultados para obtener solo los campos necesarios y genera la URL del currículum
    const candidatesData = candidates.map(candidate => ({
      name: candidate.name,
      city: candidate.city,
      description: candidate.description,
      phone: candidate.phone,
      sector: candidate.sector,
      FechaDB: candidate.FechaDB,
      user: candidate.user,
      curriculum:candidate.curriculum 

    }));
    
    console.log(candidatesData);
  
    return candidatesData;
  } catch (error) {
    console.error('Error al obtener candidatos:', error);
    throw error;
  }
}

module.exports = getallcandidates;