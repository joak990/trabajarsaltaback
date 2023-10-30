const User = require('../models/user');

const getChatsList = async (idUser) => {
  try {
    const user = await User.findById(idUser, 'receivedMessages');

    if (!user) {
      return [];
    }

    const chatList = new Map();

    for (const message of user.receivedMessages) {
      const senderId = message.sender.toString();
      if (!chatList.has(senderId)) {
        chatList.set(senderId, {
          userId: senderId,
          lastMessage: message.content,
          status:user.status
        });
      }
    }

    // Fetch sender names based on sender IDs
    const senderIds = Array.from(chatList.keys());
    const senders = await User.find({ _id: { $in: senderIds } }, 'name');

    // Assign sender names to chatList
    for (const sender of senders) {
      const senderId = sender._id.toString();
      chatList.get(senderId).name = sender.name;
    }

    const chatsArray = Array.from(chatList.values());

    return chatsArray;
  } catch (error) {
    console.error(error);
    return [];
  }
};

module.exports = getChatsList;
