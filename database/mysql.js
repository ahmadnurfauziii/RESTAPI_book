var Sequelize = require('sequelize');
var db = new Sequelize('library', 'root', '', {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = db;