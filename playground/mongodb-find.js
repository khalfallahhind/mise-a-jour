// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/node1', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  


//compteur
   db.collection('users').find().count().then((count) => {
    console.log(`Todos count: ${count}`);
  }, (err) => {
    console.log('Unable to fetch ', err);
 });


//fetch

 // db.collection('users').find({name:'hind'}).toArray().then((docs) => {
   // console.log(JSON.stringify(docs, undefined, 2));
  //});

  // db.close();
});