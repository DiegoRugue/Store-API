const repository = require('../repositories/customer');
const md5 = require('md5');
const email = require('../services/email');
const authService = require('../services/auth');

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
        let { password } = req.body;
        password = md5(password + global.SALT_KEY);
        await repository.post({ ...req.body, password: password });

        email.send(req.body.email, 'Seja bem vindo', global.EMAIL_TMPL.replace('{0}', req.body.name))

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

exports.authenticate = async (req, res) => {
    try {
        let { password } = req.body;
        password = md5(password + global.SALT_KEY);
        const customer = await repository.authenticate({ email: req.body.email, password: password });

        if (!customer) {
            res.status(404).send({
                message: "Usuário ou senha invalido"
            });
            return;
        }

        const token = await authService.generateToken({
            id: customer._id,
            email: customer.email,
            name: customer.name
        });

        res.status(201).send({
            token: token,
            data: {
                name: customer.name,
                email: customer.email
            }
        });

    } catch (e) {
        res.status(400).send({
            message: 'Falha ao autenticar usuário',
            data: e
        });
    }
}
