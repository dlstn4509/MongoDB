const mongoose = require('mongoose');
const { Schema } = mongoose

const schema = {
  title: {
    type: String,
    require: true
  },
  writer: {
    type: String,
    require: true
  },
  content: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
}

module.exports = mongoose.model('Books', new Schema(schema))