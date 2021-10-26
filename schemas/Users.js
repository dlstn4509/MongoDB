const mongoose = require('mongoose');
const { Schema } = mongoose
const bcrypt = require('bcrypt')

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
  userpw: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
}

const userSchema = new Schema(schema)

userSchema.pre('save', async function(next) {
// userSchema가 save되기전에 해야할 일, userRouter에 있음
  try {
    this.userpw = await bcrypt.hash(this.userpw, 8)
    next()
  }
  catch (err) {
    next(err)
  }
})

userSchema.statics.login = async function(_id, _pw) {
  try {
    const user = await this.findOne({ userid: _id, userpw: _pw })
    const rs = await bcrypt.compare(_pw, this.userpw)
    return rs ? user : null
  }
  catch (err) {
    throw new Error(err)
  }
}

userSchema.statics.findByName = async function(_name) {
  try {
    return await this.findOne({ username: _name })
  }
  catch (err) {
    throw new Error(err)
  }
}

userSchema.methods.logout = async function() {

}

module.exports = mongoose.model('Users', userSchema)