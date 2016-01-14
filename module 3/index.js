var express = require('express');
var home = require('./routes/home.js');
var costumers = require('./routes/costumers.js');

var app = express();

app.set('view engine', 'jade');
app.set('views', __dirname+'/views');
app.use( express.static(__dirname+'/public') );

app.get('/',function (req,res) {
  res.render('index');
})


app.listen(3000);
