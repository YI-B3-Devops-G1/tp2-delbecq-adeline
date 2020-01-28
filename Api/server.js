'use strict';

// application dependencies
var express 	= require('express');
var app  		= express();
var cors = require('cors');

//import routes
const routes = require('./app/routes');


var bodyParser = require('body-parser')

// Set the port number
var port = process.env.API_PORT || 3000;

//All Cors request
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());


//Routes
app.use('/', routes);

// // Middleware to catch 404 errors
// app.use(function(req, res, next) {
//   res.status(404).sendFile(process.cwd() + '/app/views/404.html');
// });

app.listen(port, () => { console.log('Server started')}) ;