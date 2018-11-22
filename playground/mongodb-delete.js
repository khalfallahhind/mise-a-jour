// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/node1', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

 // deleteMany
   //db.collection('db1').deleteMany({text: 'Eat lunch'}).then((result) => {
     //console.log(result);
   //});

  // deleteOne
  // db.collection('db1').deleteOne({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  // findOneAndDelete
  // db.collection('db1').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result);
  // });

  // db.collection('Users').deleteMany({name: 'Andrew'});

  db.collection('Users').findOneAndDelete({
    _id: new ObjectID("5bf271beb20dae1945a0fd54")
  }).then((results) => {
    console.log(JSON.stringify(results, undefined, 2));
  });

  // db.close();
});