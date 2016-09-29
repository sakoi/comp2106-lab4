var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Lab Four - Kayla Wiest' });
});

/* GET paul page */
router.get('/paul', function(req, res, next){
  res.render('paul', {title: 'Paul'});
})

/* GET brenda page */
router.get('/brenda', function(req, res, next){
  res.render('brenda', {title: 'Brenda'});
})

/* GET kayla page */
router.get('/kayla', function(req, res, next){
  res.render('kayla', {title: 'Kayla'});
})

/* GET kim page */
router.get('/kim', function(req, res, next){
  res.render('kim', {title: 'Kim'});
})

/* GET dee page */
router.get('/dee', function(req, res, next){
  res.render('dee', {title: 'Dee'});
})

module.exports = router;
