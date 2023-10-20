
const express = require('express');
const PublicationRouter = express.Router();




PublicationRouter.post("/createpost", async (req,res) => {
    try {
        
    
    res.status(200).json("hola")
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
});


PublicationRouter.get("/getalljobs", async (req,res) => {
    try {
        
    
    res.status(200).json("hola")
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
});

module.exports =  PublicationRouter;