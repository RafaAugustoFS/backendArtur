const { DataTypes } = require ("sequelize");
const sequelize = require("../config/config");

const Colaborators = sequelize.define('colaborators', {
    nome: {
        type:DataTypes.STRING,
        allowNull: false
    },
    cnpj: {
        type: DataTypes. STRING,
        allowNull: false
    },
    mercadoria: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

module.exports = Colaborators;