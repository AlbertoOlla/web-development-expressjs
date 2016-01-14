var express = require('express');
var path = require('path');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/module4');

var home = require('./routes/home.js');
var costumer = require('./routes/costumer.js');

var app = express();

app.set('view engine', 'jade');
app.set('views', __dirname+'/views');
app.use( express.static(path.join(__dirname+'/public')) );

app.use('/', home);
app.use('/costumer', costumer);


app.listen(3000);
