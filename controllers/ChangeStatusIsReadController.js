const User = require("../models/user")



const changereadmessage = async (id, idUser) => {
  try {
    const user = await User.findById(idUser);
    
    if (!user) {
      console.error('Usuario no encontrado');
      return;
    }

   
    for (let message of user.receivedMessages) {
      if (message._id.toString() === id) {
        message.isRead = true;
        break;
      }
    }

    // Guardar el usuario actualizado
    await user.save();

    return user;
  } catch (error) {
    console.error('Error al actualizar el mensaje:', error);
    throw error;
  }
}

module.exports = changereadmessage;