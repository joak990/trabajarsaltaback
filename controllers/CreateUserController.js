const User = require("../models/user")



const createuser = async (name,email,uid) => {
    try {
        const existingUser = await User.findOne({ email: email });
        if(existingUser.banned === true)return "banned"
        if (existingUser) {
            return existingUser;
        }
    
      const newUser = new User({
        name: name, 
        email: email,
        uid: uid,
        root: "google",
        banned:false,
        FechaLimite:fechaVencimiento,
        FechaDB:fechaDb,
        
  
        
      });
  
     
      await newUser.save();
  
      return newPost; 
    } catch (error) {
      console.error('Error al crear usuario:', error);
      throw error;
    }
  }
  
  module.exports = createuser;