const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
    sequelize.define('pokemon', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    name:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    img:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    health:{
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    attack:{
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    defense:{
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    speed:{
      type: DataTypes.FLOAT,
    },
    height:{
      type: DataTypes.FLOAT,
    },
    weight:{
      type: DataTypes.FLOAT,
    },
  });
};
