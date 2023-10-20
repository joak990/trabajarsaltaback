







const express = require('express');
const UsersRouter = express.Router();




UsersRouter.post("/users", async (req,res) => {
    try {
        
    
    res.status(200).json("hola")
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
});

module.exports =  UsersRouter;