const express = require('express');
const SenderRouter = express.Router()
const sendmessage = require('../controllers/SenderMessagesController');
const getprivatemessage = require('../controllers/GetPrivateMessagesController');
const getChatsList = require('../controllers/GetChatsController');

SenderRouter.post("/sendermessages", async (req,res) => {
    try {
        const {senderId,receiverId,content} = req.body
    const sendmessages = await sendmessage(senderId,receiverId,content)
    res.status(200).json(sendmessages)
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
});


SenderRouter.post("/sendermessages", async (req,res) => {
    try {
        const {senderId,receiverId,content} = req.body
    const sendmessages = await sendmessage(senderId,receiverId,content)
    res.status(200).json(sendmessages)
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
});


SenderRouter.post("/getmessage", async (req,res) => {
    try {
        const {userId1, userId2} = req.body
        console.log(req.body);
    const getmessages = await getprivatemessage(userId1, userId2)
    res.status(200).json(getmessages)
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
});

SenderRouter.get("/getchats/:idUser",async (req, res) => {
    const { idUser } = req.params;// Obtén el ID del usuario desde la sesión o el token
  console.log(idUser,"user");
    try {
      const chatsArray = await getChatsList(idUser)
      return res.status(200).json(chatsArray);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Error interno del servidor' });
    }
  });
  
  

module.exports= SenderRouter


