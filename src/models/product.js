const { DataTypes } = require("sequelize");
const sequelize = require("../config/config");

const Product = sequelize.define('product', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    preco: {
        type: DataTypes.DOUBLE,
        allowNull: false
    },
    quantidade: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
})

module.exports = Product;