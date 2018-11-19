// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/node1',(err,db) => {
    if (err){
        console.log('unable to connect');
    }
    console.log('connect to db');

    //db.collection('db1').insertOne({
      //     text: 'Something to do',
        //   completed: false
         //}, (err, result) => {
          // if (err) {
            // return console.log('Unable to insert ', err);
         // }
        
           //console.log(JSON.stringify(result.ops, undefined, 2));
        //});
      
        db.collection('users').insertOne({
            name: 'hind',
            age: 25 ,
            location: 'Djerba'
          }, (err, result) => {
            if (err) {
              return console.log('Unable to insert ', err);
           }
         
            //console.log(JSON.stringify(result.ops, undefined, 2));
            console.log(result.ops[0]._id.getTimestamp());
         });
    db.close();
});