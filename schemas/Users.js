const mongoose = require('mongoose');
const { Schema } = mongoose

const schema = {
  userid: {
    type: String,
    require: true,
    unique: true
  },
  username: {
    type: String,
    require: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
}

module.exports = mongoose.model('Users', new Schema(schema))