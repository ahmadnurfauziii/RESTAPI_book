const express = require('express');
const router = express.Router();
const db = require('../database/mysql');
const controller = require('../controller/index');


router.get('/', controller.book.getAll);
router.get('/:id_buku', controller.book.getOne);

module.exports = router;