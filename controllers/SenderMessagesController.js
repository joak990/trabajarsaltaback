const User = require('../models/user');

const sendmessage = async (senderId, receiverId, content) => {
  try {
    const sender = await User.findById(senderId);
const receiver = await User.findById(receiverId);

if (!sender || !receiver) {
  return false;
}

const message = { sender: senderId,receiver:receiverId, content };

sender.sentMessages.push(message);
receiver.receivedMessages.push(message); // Almacenar el mensaje en los recibidos del destinatario

await sender.save();
await receiver.save();
  } catch (error) {
    console.error(error);
    return false; // Manejo de errores, retorna false en caso de error
  }
};

module.exports = sendmessage;
