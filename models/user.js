const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        
    },
    uid:{
        type:String,
        required:true,
        
    },
    root:{
        type:String,
        required:false
    },
    banned:{
        type:Boolean,
        required:false
    }
})
  module.exports= mongoose.model("User",userSchema)