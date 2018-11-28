const express = require('express');
const path = require('path');
const consign = require('consign');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const cors = require('cors');

let app = express();

app.use(cors({
	origin: '*',
	exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
	maxAge: 5,
	credentials: true,
	allowMethods: ['GET', 'POST', 'UPDATE', 'PUT', 'PATCH', 'DELETE'],
	allowHeaders: ['Content-Type', 'Authorization', 'Accept']
}));

app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(bodyParser.urlencoded({extended: true}));

app.use(expressValidator());

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, '../app/view'));

consign()
	.include('app/routes')
	.then('app/controllers')
	.then('app/dataBaseMongo/conectaBanco')
	.into(app);

module.exports = app;