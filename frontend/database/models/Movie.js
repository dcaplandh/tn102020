module.exports = (sequelize, DataType) => {
    const Movie = sequelize.define("peliculas",{
        /*id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },*/
        title: {
            type: DataType.STRING
        },
        awards:{
            type:DataType.INTEGER
        },
        genre_id:{
            type:DataType.INTEGER
        }
    },{
        tableName: "movies",
        timestamps: false
    });

    Movie.associate = function(models){
        Movie.belongsTo(models.generos,{
            as: "generos",
            foreignKey: "genre_id"
        });
        Movie.belongsToMany(models.actores,{
            as:"actores",
            through: "actor_movie",
            foreignKey: "movie_id",
            otherKey: "actor_id",
            timestamps: false
        });
    }
    
    return Movie;
}