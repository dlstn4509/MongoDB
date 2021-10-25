const mongoose = require('mongoose')
const { DB_HOST, DB_USER, DB_PASS } = process.env
const url = `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}?retryWrites=true&w=majority`


module.exports = async () => {
  try {
    const connect = await mongoose.connect(url);
    console.log('mongoose server start')
    return connect;
  }
  catch (err) {
    console.log(err);
  }
}