var MongoClient = require('mongodb').MongoClient;
const url = 'mongodb+srv://carmen:lolo33@badbankapp.w9xv5.mongodb.net/MyBadBankCapstone?retryWrites=true&w=majority';

<<<<<<< HEAD
MongoClient.connect(url, function(err, client) {
=======
MongoClient.connect("mongodb+srv://carmen:lolo33@badbankapp.w9xv5.mongodb.net/MyBadBankCapstone?retryWrites=true&w=majority/", function(err, client) {
>>>>>>> ed5a85e98a824cfc3d56b098dd4b51d0adf0ceeb
    console.log('Connected!');
    
    const dbName = 'MyBadBankCapstone';
    const db = client.db(dbName);

    var name = 'user' + Math.floor(Math.random()*10000);
    var email = name + '@mit.edu';
    
    var collection = db.collection('customers');
    var doc = {name, email};
    collection.insertOne(doc, {w:1}, function(err,result) {
        console.log('Document insert');
    });

    var customers = db
        .collection('customers')
        .find()
        .toArray(function(err, docs) {
            console.log('Collection:',docs);

        client.close();
        });
});