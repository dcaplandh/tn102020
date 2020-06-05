module.exports = (sequelize, DataType) => {
    const Actor = sequelize.define("actores",{
        /*id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },*/
        first_name: {
            type: DataType.STRING
        },
        last_name:{
            type:DataType.STRING
        },
        favorite_movie_id:{
            type:DataType.INTEGER
        }
    },{
        tableName: "actors",
        timestamps: false
    });
    Actor.associate = function(models){
        Actor.belongsToMany(models.peliculas,{
            as:"peliculas",
            through: "actor_movie",
            foreignKey: "actor_id",
            otherKey: "movie_id",
            timestamps: false
        });
    }
    return Actor;
}