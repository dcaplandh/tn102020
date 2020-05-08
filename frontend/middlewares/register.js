var date = new Date();
var current_hour = date.getHours();

const middleware = {
    verificarHora : function(req,res,next){
        if(current_hour < 8 || current_hour >= 20){
            next();
        }else{
            res.send("Horario no válido para registros.");
        }
    }
}

module.exports = middleware;