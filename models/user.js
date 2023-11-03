const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  uid: {
    type: String,
    required: true,
  },
  root: {
    type: String,
    required: false,
  },
  banned: {
    type: Boolean,
    required: false,
  },
  status: {
    type: Boolean,
    required: false,
  },
  sentMessages: [
    {
      receiver: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
      content: String,
      timestamp: { type: Date, default: Date.now },
      isRead: { type: Boolean, default: false },
    },
  ],
  receivedMessages: [
    {
      sender: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
      content: String,
      timestamp: { type: Date, default: Date.now },
      isRead: { type: Boolean, default: false },
    },
  ],
});

module.exports = mongoose.model("User", userSchema);