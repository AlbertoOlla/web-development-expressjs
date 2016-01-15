var mongoose = require('mongoose');

var costumerSchema = new mongoose.Schema({
  name:  String,
  email: String,
});

mongoose.model('Costumer', costumerSchema);
