var express = require('express');
var router = express.Router();

router.get('/uno', function(req, res, next) {
    //escribir un dato de session
    req.session.userLogged = "Diego";
    //leer un dato de session
    console.log(req.session.userLogged);
    res.send("ruta uno");
});

router.get('/dos',function(req,res,next){
    console.log("Ruta dos");
    console.log(req.session.userLogged);
    res.send("ruta dos");
});

router.get('/tres',function(req,res,next){
    //escribir una cookie
    let expira = 3600 * 1000 * 24 * 365 * 10;
    res.cookie('recordar',153,{maxAge:expira});
    res.send("ruta tres");
})

router.get('/cuatro',function(req,res,next){
    //leer una cookie
    console.log(req.cookies.recordar);
    res.send("ruta cuatro");
});

router.get('/elegir-color',function(req,res,next){
    res.render('elegir-color');
})
router.post('/elegir-color',function(req,res,next){
    let color = req.body.color;
    res.cookie('bgColor',color);
    res.cookie('mode','light');
    res.render('color-elegido',{color:color,mode:mode});
});
router.get('/mostrar-algo',function(req,res,next){
    
    if(typeof req.cookies.bgColor != 'undefined'){
        console.log("personalizado");
        res.render('algo',{color:req.cookies.bgColor,mode:"light"});
    }else{
        console.log("blanco");
        res.render('algo',{color:"white",mode:"dark"});
    }
    
})

module.exports = router;
