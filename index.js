var express = require('express');
var app = express();
var cors = require('cors');
var dal = require('./dal.js');

<<<<<<< HEAD
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const swaggerJsdoc = require('swagger-jsdoc');

const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: 'BadBank App',
            version: '1.0.0'
        }
    },
    apis: ['index.js']
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

/**
 * @swagger
 * /badbankbackend:
 *      get:
 *          description: Get user balance
 *          responses: carmen@mit.edu
 *              description: success
 */ 
    
app.use(express.static('public'));
app.use(cors());

app.get('/account/create/:name/:email/:password', function (req, res) {
    console.log("Hello!");
=======

app.use(express.static('public'));
app.use(cors());

app.get(`http://localhost:${process.env.PORT || 5000}/account/create/:name/:email/:password`, function (req, res) {
>>>>>>> ed5a85e98a824cfc3d56b098dd4b51d0adf0ceeb
    dal.create(req.params.name,req.params.email,req.params.password)
        .then((user) => {
            console.log(user);
            res.send(user);
        });
    })  

<<<<<<< HEAD
app.get('/account/login/:email/:password', function (req, res) {
=======
app.get(`http://localhost:${process.env.PORT || 5000}/account/login/:email/:password`, function (req, res) {
>>>>>>> ed5a85e98a824cfc3d56b098dd4b51d0adf0ceeb
    dal.login(req.params.email,req.params.password)
        .then((user) => {
        console.log(user);
        res.send(user);
        });
    })

app.get('/account/logout/:email', function (req, res) {
    dal.logout(req.params.email)
        .then((user) => {
        console.log(user);
        res.send(user);
        });
    })

<<<<<<< HEAD
app.get('/account/find/:email', function (req, res) {
=======
app.get(`http://localhost:${process.env.PORT || 5000}/account/find/:email`, function (req, res) {
>>>>>>> ed5a85e98a824cfc3d56b098dd4b51d0adf0ceeb
    dal.find(req.params.email)
        .then((user) => {
        console.log(user);
        res.send(user);
        });
    }) 

app.get('/account/findOne/:email', function (req, res) {
    dal.findOne(req.params.email)
        .then((user) => {
        console.log(user);
        res.send(user);
        });
    })

<<<<<<< HEAD
// app.get('/account/deposit/:name/:email/:amount', function (req, res) {
//     dal.deposit(req.params.name, req.params.email, req.params.amount)
//         .then((user) => {
//         console.log(user);
//         res.send(user);
//         });
//     }) 

app.get('/account/deposit/:name/:email/:amount', function (req, res) {
=======

app.get(`http://localhost:${process.env.PORT || 5000}/account/deposit/:name/:email/:amount`, function (req, res) {
>>>>>>> ed5a85e98a824cfc3d56b098dd4b51d0adf0ceeb
    dal.find(req.params.email)
        .then((user) => {
        console.log('user from index.js' + JSON.stringify(user));
        dal.deposit(user[0], req.params.amount)
            .then((user) => {
            console.log(user);
            res.send(user);
            });
        });
}) 

app.get('/account/withdraw/:name/:email/:amount', function (req, res) {
    dal.find(req.params.email)
<<<<<<< HEAD
=======
        .then((user) => {
        console.log('user from index.js' + JSON.stringify(user));
        dal.withdraw(user[0], req.params.amount)
            .then((user) => {
            console.log(user);
            res.send(user);
        });
    });
})    

app.get('/account/balance/:email/:amount', function (req, res) {
    dal.deposit(req.params.email, req.params.amount)
>>>>>>> ed5a85e98a824cfc3d56b098dd4b51d0adf0ceeb
        .then((user) => {
        console.log('user from index.js' + JSON.stringify(user));
        dal.withdraw(user[0], req.params.amount)
            .then((user) => {
            console.log(user);
            res.send(user);
        });
<<<<<<< HEAD
    });
})    

// app.get('/account/balance/:email/:amount', function (req, res) {
//     dal.deposit(req.params.email, req.params.amount)
//         .then((user) => {
//         console.log(user);
//         res.send(user);
//         });
//     })  
=======
    })  
>>>>>>> ed5a85e98a824cfc3d56b098dd4b51d0adf0ceeb

app.get('/account/updateBalance/:email', function (req, res) {
    dal.update(req.params.email)
        .then((user) => {
        console.log(user);
        res.send(user);
        });
    })

app.get('/account/all', function (req, res) {
    dal.all()
        .then((docs) => {
            console.log(docs);
            res.send(docs);
        });
})

var port = process.env.PORT || 3000;
app.listen(port);
console.log('Running on port: ' + port);