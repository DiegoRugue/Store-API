const repository = require('../repositories/customer');

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
        await repository.post(req.body);
        res.status(201).send({
            message: "Cliente cadastrado com sucesso!"
        });
    } catch (e) {
        res.status(400).send({
            message: 'Falha ao cadastrar cliente',
            data: e
        });
    }
}

exports.put = async (req, res) => {
    try {
        await repository.put(req.params.id, req.body);
        res.status(200).send({
            message: "Cliente atualizado com sucesso!"
        });
    } catch (e) {
        res.status(400).send(e);
    }
}

exports.delete = async (req, res) => {
    try {
        await repository.delete(req.params.id);
        res.status(200).send({
            message: "Cliente removido com sucesso!"
        });
    } catch (e) {
        res.status(400).send(e);
    }
}
