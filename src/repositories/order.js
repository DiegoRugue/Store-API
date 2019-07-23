const mongoose = require('mongoose');
const Order = mongoose.model('Order');

exports.get = async () => {
    return await Order
        .find({}, 'number status')
        .populate('customer', 'name')
        .populate('itens.product', 'title')
}

exports.getById = async (id) => {
    return await Order.findById(id);
}

exports.post = async (data) => {
    const product = new Order(data)
    await product.save();
}

exports.put = async (id, data) => {
    await findByIdAndUpdate(id, data)
}

exports.delete = async (id) => {
    await findByIdAndDelete(id)
}
