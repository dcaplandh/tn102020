var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/clase1/ejemplo1', function(req, res, next) {
  res.render('ejemplo1');
});
router.get('/clase1/ejemplo2', function(req, res, next) {
    res.render('ejemplo2');
});


module.exports = router;
