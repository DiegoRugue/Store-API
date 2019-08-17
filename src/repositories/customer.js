const mongoose = require('mongoose');
const Customer = mongoose.model('Customer');

exports.get = async () => {
    return await Customer.find();
}

exports.getById = async (id) => {
    return await Customer.findById(id);
}

exports.post = async (data) => {
    const customer = new Customer(data);
    await customer.save();
}

exports.put = async (id, data) => {
    await Customer.findByIdAndUpdate(id, data);
}

exports.delete = async (id) => {
    await Customer.findByIdAndRemove(id);
}

exports.authenticate = async (data) => {
    return await Customer.findOne({
        email: data.email, 
        password: data.password
    });
}