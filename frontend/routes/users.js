var express = require('express');
var router = express.Router();
var usersController = require('../controllers/usersController');
var registerMiddleware = require('../middlewares/register');
const {check, validationResult, body} = require('express-validator');

/* GET users listing. */
router.get('/', function(req, res, next) {
  //mostrar el listado de usuarios
  res.send('respond with a resource');
});

router.get('/register',usersController.showRegisterForm);

router.post('/register',
  [
    check('name').isLength({min:2}).withMessage('El nombre debe tener al menos 2 letras.'),
    check('email').isEmail().withMessage('El email es inválido.'),
    check('password').isLength({min:6}),
    check('name').isLowercase()
  ],
  usersController.registerForm);

router.get('/login',usersController.showLoginForm);
router.post('/login',usersController.loginForm);

module.exports = router;
