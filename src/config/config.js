const {Sequelize} = require("sequelize");

const sequelize = new Sequelize('lojaLibbs', 'root', 'root',{
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;