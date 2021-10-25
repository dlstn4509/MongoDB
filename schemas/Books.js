const mongoose = require('mongoose');
const { Schema } = mongoose

const schema = {
  title: {
    type: String,
    required: true
  },
  writer: {
    type: String,
    required: true
  },
  content: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now().toString()
  }
}

module.exports = mongoose.model('Books', new Schema(schema))