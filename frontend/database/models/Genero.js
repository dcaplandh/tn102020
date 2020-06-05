module.exports = (sequelize, DataType) => {
    const Genre = sequelize.define("generos",{
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataType.STRING
        }
    },{
        tableName: "genres",
        timestamps: false
    });

    Genre.associate = function(models){
        Genre.hasMany(models.peliculas,{
            as: "peliculas",
            foreignKey: "genre_id"
        });
    }
    return Genre;
}