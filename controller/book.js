const model = require('../model/index');
const controller = {};
const { Op } = require('sequelize');

controller.getAll = async function(req,res){

    try {
        let book = await model.book.findAll({
            attributes: [['id_buku', 'idBuku'],['judul', 'judulBuku'],['description', 'deskripsiBuku'],['penulis', 'penulis'],['jml_hal', 'jmlHalaman'],['categorie', 'categorieBuku'],['penerbit', 'penerbitBuku']],
            where: {
                [Op.and]: [
                    {judul: 'From Dream to Habits'},
                    {categorie: 'Motivation & Self-Help'},

                ]
            }
        })
            if (book.length > 0 ) {
                res.status(200).json({
                    message: 'Get Method Data Buku',
                    data: book
                })
            } else {
                res.status(200).json({
                    message: 'Tidak ada Data',
                    data:[]
                })
            }
    } catch (error) {
        res.status(404).json({
            message: error.message
        })
    }
}

controller.getOne = async function (req, res) {
    try {
        let book = await model.book.findAll({
                where: {
                    id_buku: req.params.id_buku
                }
        })
        if ( book.length > 0){
            res.status(200).json({
                message: 'Buku ditemukan',
                data:  book
            })
        } else { 
            res.status(200).json({
                message: 'Tidak ada data',
                data: []
            })
        }
    } catch (error) {
        res.status(404).json({
            message: error.message
        })
    }
}


module.exports = controller;