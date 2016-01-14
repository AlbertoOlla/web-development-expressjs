var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var costumerSchema = new Schema({
  name:  String,
  email: String,
});

var Costumer = mongoose.model('Costumer', costumerSchema);
