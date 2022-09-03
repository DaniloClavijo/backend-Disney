const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo

  // no le paso un id, dejo que lo genere solo 
  sequelize.define('character', {

    image: {
        type : DataTypes.TEXT,
      }, 
    name: {
        type: DataTypes.STRING, 
      }, 
    age: {
          type: DataTypes.INTEGER, 
        }, 
    weight: {
          type: DataTypes.FLOAT, 
        },
    history: {
          type: DataTypes.TEXT, 
        },
    moovie: {
          type: DataTypes.INTEGER, 
        },
    associatedMovie: {
          type: DataTypes.STRING, 
        }, 

  },
  {
    timestamps : false
  }
  );
};