const middleware = {
    alert: function(req,res,next){
        console.log("se ejecutó.");
        console.log(req.query.nombre);
        next();
    }
}

module.exports = middleware;