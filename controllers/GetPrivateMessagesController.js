const User = require('../models/user');

const getPrivateMessages = async (userId1, userId2) => {
  try {
    const user1 = await User.findById(userId1, 'sentMessages name');
    const user2 = await User.findById(userId2, 'sentMessages name');

    if (!user1 || !user2) {
 
      return [];
    }


    const user1SentMessages = user1.sentMessages;
    const user2SentMessages = user2.sentMessages;


    const user1SentMessagesToUser2 = user1SentMessages
      .filter(message => message.receiver && message.receiver.toString() === userId2)
      .map(message => ({
        name: user1.name,  
        content: message.content, 
        timestamp: message.timestamp 
      }));

    const user2SentMessagesToUser1 = user2SentMessages
      .filter(message => message.receiver && message.receiver.toString() === userId1)
      .map(message => ({
        name: user2.name,  
        content: message.content,  
        timestamp: message.timestamp  
      }));

    // Combina y ordena los mensajes
    const messages = [
      ...user1SentMessagesToUser2,
      ...user2SentMessagesToUser1
    ].sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));

    return messages;
  } catch (error) {
    console.error(error);
    // Manejo de errores
    return [];
  }
};

module.exports = getPrivateMessages;
