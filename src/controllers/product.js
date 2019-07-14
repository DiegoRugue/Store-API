const mongoose = require('mongoose');
const Product = mongoose.model('Product');

exports.get = (req, res) => {
    Product.find({active: true}, 'title slug price').then(data => {
        res.status(200).send(data);
    }).catch(e => {
        res.status(400).send(e);
    });
}

exports.getById = (req, res) => {
    Product.findById(req.params.id).then(data => {
        res.status(200).send(data);
    }).catch(e => {
        res.status(400).send(e);
    });
}

exports.post = (req, res) => {
    let product = new Product(req.body)
    product.save().then(() => {
        res.status(201).send({
            message: "Produto cadastrado com sucesso!"
        }).catch(e => {
            res.status(400).send({
                message: 'Falha ao cadastrar produto',
                data: e
            });
        });
    });
}

exports.put = (req, res) => {
    const id = req.params.id;
    res.status(200).send({
        id: id,
        title: req.body
    });
}

exports.delete = (req, res) => {
    const id = req.params.id;
    res.status(200).send();
}