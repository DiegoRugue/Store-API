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
    const order = new Order(data)
    await order.save();
}

exports.put = async (id, data) => {
    await Order.findByIdAndUpdate(id, data)
}

exports.delete = async (id) => {
    await Order.findByIdAndDelete(id)
}
