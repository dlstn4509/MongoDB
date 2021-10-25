const mongoose = require('mongoose');
const { Schema } = mongoose

const schema = {
  userid: {
    type: String,
    required: true,
    unique: true
  },
  username: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
}

module.exports = mongoose.model('Users', new Schema(schema))