var express = require('express');
var router = express.Router();

router.get('/',function (req,res) {
  res.render('costumer/index');
});

router.get('/create',function (req,res) {
  res.render('costumer/create');
});

router.post('/create',function (req,res) {

  //Save

  res.redirect('/costumer');

});

module.exports = router;
