const Sequelize = require('sequelize');
const db = require('../database/mysql');

var book = db.define('book', 
{
        id_buku: Sequelize.INTEGER,
        judul: Sequelize.STRING,
        description: Sequelize.STRING,
        penulis: Sequelize.STRING,
        jml_hal: Sequelize.STRING,
        categorie: Sequelize.STRING,
        penerbit: Sequelize.INTEGER,
        img: Sequelize.STRING

    },{
        freezeTableName: true,
        timestamps: false
});
book.removeAttribute('id');
module.exports = book;