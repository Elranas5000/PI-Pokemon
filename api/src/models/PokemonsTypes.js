const { DataTypes } = require('sequelize');

// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('pokemonType', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
       //genera un uuid aleatorio
      allowNull: false,
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false,
    },
  });
};