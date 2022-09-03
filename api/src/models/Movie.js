const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo

  // no le paso un id, dejo que lo genere solo 
  sequelize.define('movie', {

    id: { // id
      type: DataTypes.UUID,
      defaultValue :DataTypes.UUIDV4,
      allowNull: false, // campo obligatorio
      primaryKey : true
    },
    image: {
        type : DataTypes.TEXT,
      }, 
    title: {
        type: DataTypes.STRING, 
      }, 
    releaseDate: {
          type: DataTypes.INTEGER, 
        }, 
    scoreMovie: {
          type: DataTypes.FLOAT, 
          validate : {
            min : 1,
            max : 5
          }
        },
    character: {
        type : DataTypes.STRING,
    }
  },
  {
    timestamps : false
  }
  );
};