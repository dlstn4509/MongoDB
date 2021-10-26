const fs = require('fs-extra');
const path = require('path');

const db = {}
fs
  .readdirSync(__dirname)
  .filter(file => file !== 'index.js')
  .forEach(file => {
    const model = require(path.join(__dirname, file));
    db[model.modelName] = model;
  })
  
module.exports = db;