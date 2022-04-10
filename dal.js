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

async function deposit (name, email, amount) {

    /**
     * Get the user's record, so you have access to their balance info
     * This returns the first object that matches the filter (mongo calls these 'docs'), ie:
     * 
     *    {
     *        _id: 4tefw3tg, 
     *        email: 'me@me.com', 
     *        name: 'Jay', balance: 0
     *    }
     */
    const user = await db
        .collection('users')
        .findOne({email, name})
    
    // Extract the current balance. If for some reason it's undefined, set it to 0.00
    const currentBalance = user.balance ? parseFloat(user.balance) : 0.00
    
    // Set up the filter you'll use to identify which record to update
    // You don't need to explicitly write { email: email, name: name }, JS does that for you
    const filter = { email, name }

    // Set what you want to update -- the existing balance plus the amount (converted to a decimal)
    // You need to set it to a decimal because since it was in a URL string, express is going to think
    // the amount parameter is a string... and if you try to add '100' and '100' you'll get
    // '100100' instead of 200
    const updateDoc = {
        $set: {
          balance: currentBalance + parseFloat(amount)
        },
      };

    // Wait for the record to be updated
    await db.collection('users').updateOne(filter, updateDoc);

    // Get the updated record
    const updatedUser = await db
        .collection('users')
        .findOne({email, name})
    
    // Send the updated user record back to your deposit route, so that route has
    // access to the user info
    return updatedUser

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