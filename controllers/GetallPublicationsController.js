const Publication = require("../models/publication");

const getallposts = async () => {
  try {
    const publications = await Publication.find().populate({
      path: "user",
      select: "name"
    });

    // Filtrar las publicaciones con isDeleted igual a false
    const filteredPublications = publications.filter(publication => !publication.isDeleted);

    return filteredPublications;
  } catch (error) {
    console.error('Error al obtener publicaciones:', error);
    throw error;
  }
}

module.exports = getallposts;