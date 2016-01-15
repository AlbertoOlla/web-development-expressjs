var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');

var Costumer = mongoose.model('Costumer');

router.get('/',function (req,res) {
  Costumer.find({}, function (err, docs) {
    if(err){ return res.send(err); }
    res.render('costumer/index',{costumers : docs});
  });
});

router.get('/:id',function (req,res) {
  Costumer.findOne({_id: req.params.id }, function (err, doc) {
    if(err){ return res.send(err); }
    res.render('costumer/detail',{costumer : doc});
  });
});

router.get('/create',function (req,res) {
  res.render('costumer/create');
});

router.post('/create',function (req,res) {
  var newCostumer = new Costumer({ name : req.body.name, email: req.body.email });

  newCostumer.save(function (err,data) {
    if(err){ return res.send(err); }
    res.redirect('/costumer');
  });
});


router.get('/:id',function (req,res) {
  Costumer.findOne({_id: req.params.id }, function (err, doc) {
    if(err){ return res.send(err); }
    res.render('costumer/detail',{costumer : doc});
  });
});

router.get('/:id/edit',function (req,res) {
  Costumer.findOne({_id: req.params.id }, function (err, doc) {
    if(err){ return res.send(err); }
    res.render('costumer/edit',{costumer : doc});
  });
});

router.post('/:id/edit',function (req,res) {

  Costumer.update({_id: req.params.id },{ name: req.body.name, email:req.body.email }, function (err, doc) {
    if(err){ return res.send(err); }
    res.redirect('/costumer/'+req.params.id);
  });
});

module.exports = router;
