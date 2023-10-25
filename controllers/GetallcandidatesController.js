const Candidate = require("../models/candidate");

const getallcandidates = async () => {
  try {
    // Realiza una consulta a la base de datos para obtener los candidatos
    const candidates = await Candidate.find({});

    // Mapea los resultados para obtener solo los campos necesarios
    const candidatesData = candidates.map(candidate => ({
        name: candidate.name,
        city: candidate.city,
        description: candidate.description,
        phone: candidate.phone,
        curriculum: candidate.curriculum,
        FechaDB: candidate.FechaDB,
    }));

    return candidatesData;
  } catch (error) {
    console.error('Error al obtener candidatos:', error);
    throw error;
  }
}

module.exports = getallcandidates;