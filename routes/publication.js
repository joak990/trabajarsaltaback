
const express = require('express');
const createPost = require('../controllers/CreatePublicationController');
const getallposts = require('../controllers/GetallPublicationsController');
const PublicationRouter = express.Router();
const moment = require('moment-timezone');
const Publication = require("../models/publication");


PublicationRouter.post("/createpost", async (req,res) => {
    try {
        
     const {user,content,phone,salary,sector,departament} = req.body
     const newpost = await createPost(user,content,phone,salary,sector,departament)
    res.status(200).json(newpost)
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
});


PublicationRouter.get("/getallpost", async (req,res) => {
    try {
        
    const getallpost = await getallposts()
    res.status(200).json(getallpost)
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
});



module.exports =  PublicationRouter;