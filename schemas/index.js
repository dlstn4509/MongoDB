const path = require('path')
const mongoose = require('mongoose')
const fs = require('fs-extra')
const { DB_HOST, DB_USER, DB_PASS } = process.env
const url = `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}?retryWrites=true&w=majority`


module.exports = async () => {
  try {
    await mongoose.connect(url);
    console.log('mongoose server start');

    const db = {};
    fs
      .readdirSync(__dirname)
      .filter(file => file !== 'index.js')
      .forEach(file => {
        const model = require(path.join(__dirname, file));
        db[model.modelName] = model;
      })
    return db;


    /* const Users = require('./Users');
    const Books = require('./Books');
    return { Users, Books }; */
  }


  catch (err) {
    console.log(err);
  }
}