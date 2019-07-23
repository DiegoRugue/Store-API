const repository = require('../repositories/order');
const guid = require('guid');

exports.get = async (req, res) => {
    try {
        const data = await repository.get();
        res.status(200).send(data);
    } catch (e) {
        res.status(400).send(e);
    }
}

exports.getById = async (req, res) => {
    try {
        const data = await repository.getById(req.params.id);
        res.status(200).send(data);
    } catch (e) {
        res.status(400).send(e);
    }
}

exports.post = async (req, res) => {
    try {
        await repository.post({
            customer: req.body.customer,
            number: guid.raw().substring(0, 6),
            itens: req.body.itens
        });
        res.status(201).send({
            message: "Pedido cadastrado com sucesso!"
        });
    } catch (e) {
        res.status(400).send({
            message: 'Falha ao cadastrar pedido',
            data: e
        });
    }
}

exports.put = async (req, res) => {
    try {
        await repository.put(req.params.id, req.body);
        res.status(200).send({
            message: "Pedido atualizado com sucesso!"
        });
    } catch (e) {
        res.status(400).send(e);
    }
}

exports.delete = async (req, res) => {
    try {
        await repository.delete(req.params.id);
        res.status(200).send({
            message: "Pedido removido com sucesso!"
        });
    } catch (e) {
        res.status(400).send(e);
    }
}
