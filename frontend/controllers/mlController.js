const controller = {
    verVista : function(req, res, next) {
        res.render('mercadoliebre',{
            title : "Home - ML",
            logueado : true,
            usuario : controller.usuarioLogueado
        });
      },
      usuarioLogueado: "Javier",
      marca : "Mercado Liebre",
      logo: "/images/mercado-liebre-logo.png",
      verProducto: function(req,res){
        res.render('producto',{
            title : "Home - ML",
            logueado : true,
            usuario : controller.usuarioLogueado
        });
      }
}

module.exports = controller;