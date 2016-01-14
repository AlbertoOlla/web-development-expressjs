var express = require('express');
var home = require('./routes/home.js');
var costumers = require('./routes/costumers.js');

var app = express();
app.use( express.static(__dirname+'/public') );

app.get('/',home.index);

app.get('/costumers',costumers.index);

app.get('/costumers/create',costumers.create);


app.get('/costumer/:id',function (req,res) {
  res.send('Id is '+req.params.id);
})

app.get('/costumer',function (req,res) {
  res.send('Id is '+req.query.id);
})

var env = process.env.NODE_ENV || 'development';
if ('development' == env) {
   // configure stuff here
   app.set('title','CRM Application - Development');
}else{
  app.set('title','CRM Application');
}

app.get('/env',function (req,res) {
  res.send('Title is '+app.get('title') );
});


app.listen(3000);
