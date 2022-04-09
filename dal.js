const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost: 27017';
let db = null;

MongoClient.connect("mongodb://localhost:27017/", function(err, client) {
    console.log('Connected successfully to the db server!');

    db = client.db('badbank');
});

function create(name, email, password) {
    return new Promise((resolve, reject) => {
        const collection = db.collection('users');
        const doc = {name, email, password, balance: 0};
        collection.insertOne(doc, {w:1}, function(err, result) {
            err? reject(err) : resolve(doc);
        });
    })
}

function find(email) {
    return new Promise((resolve, reject) => {
        const customers = db
            .collection('users')
            .find({ email: email })
            .toArray(function (err, docs) {
                err ? reject(err) : resolve(docs);
            });
    })
}

function login(email, password) {
    return new Promise((resolve, reject) => {
        const collection = db.collection('users');
        const doc = {email, password};
        collection.insertOne(doc, {w:1}, function(err, result) {
            err? reject(err) : resolve(doc);
        });
    })
}

function deposit (name, email, amount) {
    let balance = user.balance;
    // const balance = user.balance;
    const newBalance = user.balance + Number(amount);
    console.log(balance);
  
    const customers = db
        .collection('users')
        .find({email: email}, {balance: amount})
        .toArray(function(err, docs) {
            err ? reject(err): resolve(docs);
        });
}

function withdraw (email, amount) {
    user.balance = user.balance - Number(amount);
    console.log(user);
    props.setStatus('');      
    props.setShow(false);

    const customers = db
        .collection('users')
        .find({email: email}, {balance: amount})
        .toArray(function(err, docs) {
            err ? reject(err): resolve(docs);
        });
}

function findOne (name, email) {
    const customers = db
        .collection('users')
        .find({name: name}, {email: email}, {balance: amount})
        .toArray(function(err, docs) {
            err ? reject(err): resolve(docs);
        });
}

function updateOne(name, email, balance) {
    return new Promise ((resolve, reject) => {
        const customers = db
            .collection('users')
            .findOneAndUpdateOne(
                {name: name},
                {email: email}, 
                {balance: amount}, 
                {returnOriginal: false}, function(err, docs) {
                err ? reject(err): resolve(docs);
            });
    });
}

function all() {
    return new Promise((resolve, reject) => {
        const customers = db
        .collection('users')
        .find({})
        .toArray(function(err, docs) {
            err? reject(err) : resolve(docs);
        });
    })
}

module.exports = {create, find, findOne, updateOne, deposit, withdraw, login, all}