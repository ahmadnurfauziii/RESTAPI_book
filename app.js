const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');

const bookRoutes = require('./routes/book');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/book', bookRoutes);

app.use((req, res, next)=>{
    const error = new Error('Tidak ditemukan');
    error .status = 404;
    next(error);
});

app.use((error, req, res, next)=>{
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    })
});
module.exports = app;