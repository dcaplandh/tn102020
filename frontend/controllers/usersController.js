const fs = require('fs');
const path = require('path');
const {check, validationResult, body} = require('express-validator');

const usersFilePath = path.join(__dirname, '../data/users.json');
var users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

const controller = {
    showRegisterForm : function(req,res){
        res.render("users/registerForm");
    },
    registerForm: function(req,res){
        let errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.render('users/registerForm',{errors:errors.errors})
        }
        console.log("register form en controller")
        users.push(req.body);
        console.log(users);
        users = JSON.stringify(users);
        fs.writeFileSync(usersFilePath,users);
        res.redirect('/users');
    },
    showLoginForm: function(req,res){
        //mostrar el formulario de login
        res.render("users/loginForm");
    },
    loginForm: function(req,res){
        //revisar "users"
        //recorrerlo y verificar que el email y contraseña sean validso
        //responder con una frase 
    },
    /*multiple_data : function(req,res,next){
        let usuario;
        let direcciones;
        db.User.findByPk(45)
        .then(user=>{
            //usuario agarrado
            usuario = user;
            db.Address.findAll({
                where:{
                    user_id : usuario.id
                }
            })
            .then(addresses=>{
                direcciones = addresses;
            });
        });
        

        res.render('finalizar_compra',{
            usuario,
            direcciones
        })
    }*/
}

module.exports = controller;