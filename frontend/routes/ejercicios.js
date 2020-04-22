var express = require('express');
var router = express.Router();
var mlController = require('../controllers/mlController');

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
router.get('/clasevirtual/maqueta', function(req, res, next) {
  res.render('clasevirtual/maqueta');
});
router.get('/clase3/ejemplo1', function(req, res, next) {
  res.render('clase3/ejemplo1');
});
router.get('/clase3/ejemplo2', function(req, res, next) {
  res.render('clase3/ejemplo2');
});
router.get('/clase4/flexbox', function(req, res, next) {
  res.render('clase4/flexbox');
});
router.get('/clase4/bootstrap', function(req, res, next) {
  res.render('clase4/bootstrap');
});
router.get('/mercadoliebre', mlController.verVista);
router.get('/mercadoliebre/producto', mlController.verProducto);
module.exports = router;
