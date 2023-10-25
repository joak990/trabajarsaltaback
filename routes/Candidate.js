
const express = require('express');
const createcandidate = require('../controllers/CreateCandidateController');
const multer = require('multer');
const path = require('path');

const getallcandidates = require('../controllers/GetallcandidatesController');

const CandidateRouter = express.Router();


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads/'); // Directorio donde se guardarán los archivos
    },
    filename: (req, file, cb) => {
      const extname = path.extname(file.originalname);
      const filename = `${Date.now()}_${Math.floor(Math.random() * 1000)}${extname}`;
      cb(null, filename);
    },
  });
  
  const upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
      if (file.mimetype === 'application/pdf') {
        cb(null, true);
      } else {
        cb(new Error('El archivo debe ser un PDF.'));
      }
    },
  });

  CandidateRouter.post('/candidate', upload.single('curriculum'), async (req, res) => {
    try {
      const { user, name, city, description,curriculum, phone } = req.body; // Los campos del formulario
   
      console.log(user, name, city, description, phone); // Puedes imprimir los valores para verificar
  
      // Realiza el proceso de creación de candidato en tu base de datos
      const newcandidate = await createcandidate(user, name, city, description,curriculum, phone);
  
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