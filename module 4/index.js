var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');


mongoose.connect('mongodb://localhost/module4');

require('./models/costumer.js');

var home = require('./routes/home.js');
var costumer = require('./routes/costumer.js');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.set('view engine', 'jade');
app.set('views', __dirname+'/views');
app.use( express.static(path.join(__dirname+'/public')) );


app.use('/', home);
app.use('/costumer', costumer);


app.listen(3000);
