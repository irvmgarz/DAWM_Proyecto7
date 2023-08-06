var DataTypes = require("sequelize").DataTypes;
var _ejercicios = require("./ejercicios");
var _registros_entrenamiento = require("./registros_entrenamiento");
var _usuarios = require("./usuarios");

function initModels(sequelize) {
  var ejercicios = _ejercicios(sequelize, DataTypes);
  var registros_entrenamiento = _registros_entrenamiento(sequelize, DataTypes);
  var usuarios = _usuarios(sequelize, DataTypes);

  registros_entrenamiento.belongsTo(ejercicios, { as: "ejercicio", foreignKey: "ejercicio_id"});
  ejercicios.hasMany(registros_entrenamiento, { as: "registros_entrenamientos", foreignKey: "ejercicio_id"});
  registros_entrenamiento.belongsTo(usuarios, { as: "usuario", foreignKey: "usuario_id"});
  usuarios.hasMany(registros_entrenamiento, { as: "registros_entrenamientos", foreignKey: "usuario_id"});

  return {
    ejercicios,
    registros_entrenamiento,
    usuarios,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
