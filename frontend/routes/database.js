var express = require('express');
var router = express.Router();
const db = require('../database/models');
const sequelize = db.sequelize;


/* GET home page. */
router.get('/uno', function(req, res, next) {
  sequelize.query("SELECT * FROM movies;")
  .then(function(resultados){
      resultados[0].forEach(peli=>{
          console.log(peli.title);
      });
  })
  .catch(function(error){
      console.log("ERROR:");
      console.log(error);
  });
});

router.get('/dos',function(req,res,next){
    db.peliculas.findByPk(1)
    .then(function(pelicula){
        console.log(pelicula.title);
    })
    .catch(function(error){
        console.log(error)
    });
});

router.get('/tres',function(req,res,next){
    db.generos.findAll({include:["peliculas"]})
    .then(function(data){
        
        for(let i=0;i < data.length;i++){
            console.log(data[i].name)
            console.log(data[i].peliculas);
        }
        
    })
    .catch(function(error){
        console.log(error)
    });
})

router.get('/cuatro',function(req,res,next){
    // db.peliculas.findAll({include:["actores", "generos"]})
    // db.peliculas.findByPk(1, {include:["actores", "generos"]})
    db.peliculas.findOne({
        where: {
            title: 'Avatar'
        },
        include:["actores", "generos"]
    })
    .then(function(pelis){
        pelis.forEach(peli=>{
            console.log(peli.title);
            console.log(peli.generos.name);
            console.log(peli.actores);
            console.log("======");
        });
    })
    .catch(function(error){
        return res.send(error)
        console.log(error)
    });
    /*let pelicula = {
        title: req.body.title,
        rating:req.body.rating,
        awards:10,
        length:200,
        genre_id:8
    }
    db.peliculas.destroy(12);
    */

})

module.exports = router;
