const User = require("../models/user");

const changestatus = async (idUser,status) => {
    try {
console.log(idUser,status,"cotnroller");
     
const user = await User.findById(idUser);
if (!user) {
  throw new Error('Usuario no encontrado');
}
user.status = status; 
await user.save(); 
      return user; 
    } catch (error) {
      console.error('Error al crear publicación:', error);
      throw error;
    }
  }
  
  module.exports = changestatus