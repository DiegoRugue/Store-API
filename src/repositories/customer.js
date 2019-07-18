const mongoose = require('mongoose');
const Customer = mongoose.model('Customer');

exports.get = async () => {
    return await Customer.find({active: true});
}

exports.getById = async (id) => {
    return await Customer.findById(id);
}

exports.post = async (data) => {
    const product = new Customer(data)
    await product.save();
}

exports.put = async (id, data) => {
    await findByIdAndUpdate(id, data)
}

exports.delete = async (id) => {
    await findByIdAndDelete(id)
}
