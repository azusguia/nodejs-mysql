'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(express.static(__dirname + '/../public'));

// set the view engine to ejs
app.set('view engine', 'ejs'); 

// parse application/json
app.use(bodyParser.json());

// load of the routes
const customer = require('./routes/customer')

// allow the CORS
app.use(function (req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-access-token');
	res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
	next();
});

// pages
app.get('/', (req, res) => res.render('pages/index'));
app.get('/list', (req, res) => res.render('pages/crud/list'));
app.get('/create', (req, res) => res.render('pages/crud/create'));
app.get('/update', (req, res) => res.render('pages/crud/update'));
app.get('/delete', (req, res) => res.render('pages/crud/delete'));
app.get('/about', (req, res) => res.render('pages/about'));

// routes 
app.use('/customer', customer);

module.exports = app;



