var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/clase1/ejemplo1', function(req, res, next) {
  res.render('clase1/ejemplo1');
});
router.get('/clase1/ejemplo2', function(req, res, next) {
    res.render('clase1/ejemplo2');
});
router.get('/clase2/ejemplo1', function(req, res, next) {
  res.render('clase2/ejemplo1');
});
router.get('/clase2/ejemplo2', function(req, res, next) {
  res.render('clase2/ejemplo2');
});

module.exports = router;
