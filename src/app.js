const express = require('express');
const bodyParser = require('body-parser');
const moongose = require('mongoose');

const app = express();

const Product = require('./models/product');

const indexRoute = require('./routes/index');
const productRoute = require('./routes/product');

moongose.connect("mongodb+srv://gg:gg@cluster0-rs78f.mongodb.net/test?retryWrites=true&w=majority", {useNewUrlParser: true});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use('/', indexRoute);
app.use('/products', productRoute);

module.exports = app;