const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://dabanbus:dkfkek09**@dabanbus.vtcdv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(() => {
  console.log('몽고 접근 성공')
}, (err) => {
  console.log('몽고 설정 실패')
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});