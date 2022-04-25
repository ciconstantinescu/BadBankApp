const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb+srv://carmen:lolo33@badbankapp.w9xv5.mongodb.net/MyBadBankCapstone?retryWrites=true&w=majority';
// const uri = process.env.MONGODB_URI;
let db = null;

MongoClient.connect("mongodb+srv://carmen:lolo33@badbankapp.w9xv5.mongodb.net/MyBadBankCapstone?retryWrites=true&w=majority", function(err, client) {
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
            // change the toArray
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

function deposit(user, amount) {
    const newBalance = user.balance + Number(amount);
    console.log('newBalance' + newBalance);
    return new Promise ((resolve, reject) => {
        try{
            const customers = db
            .collection('users')
            .updateOne(
                // {name: user.name},
                {email: user.email}, 
                {$set: {balance: newBalance}}, 
                // function(err, docs) {
                // err ? reject(err): resolve(docs);
            );
        resolve(customers)
        } catch(e) {
            reject(e)
        }
        
    });
}


function withdraw (user, amount) {
    const newTotal = user.balance - Number(amount);
    // user.balance = newTotal;
    console.log('newTotal' + newTotal);
    return new Promise ((resolve, reject) => {
        try{
            const customers = db
            .collection('users')
            // .find({email: email}, {balance: amount})
            .updateOne( 
                {email: user.email},
                {$set: {balance: newTotal}},
            // .toArray(function(err, docs) {
            // err ? reject(err): resolve(docs);
        );
        resolve(customers)
        } catch(e) {
            reject(e)
        }
    });
}

function updateOne(name, email, balance) {
    return new Promise ((resolve, reject) => {
        const customers = db
            .collection('users')
            .updateOne(
                {name: name},
                {email: email}, 
                {balance: amount}, 
                {returnOriginal: false}, function(err, docs) {
                err ? reject(err): resolve(docs);
            });
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

module.exports = {create, find, deposit, withdraw, login, all}