
const express = require('express');
const createcandidate = require('../controllers/CreateCandidateController');
;
const upload = require("../libs/storage")
const fs = require('fs');
const getallcandidates = require('../controllers/GetallcandidatesController');

const CandidateRouter = express.Router();




CandidateRouter.post('/candidate', async (req, res) => {
  try {
    const { user, name, city, description, phone, sector } = req.body;
console.log(req.body);
   const newcandidate = await createcandidate( user, name, city, description, phone, sector )
      res.status(200).json(newcandidate);
    
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

CandidateRouter.get("/getcandidates", async (req,res) => {
    try {
     

  const candidates  = await getallcandidates()
    res.status(200).json(candidates)
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
});














module.exports =  CandidateRouter;