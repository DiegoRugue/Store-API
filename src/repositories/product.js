const mongoose = require('mongoose');
const Product = mongoose.model('Product');

exports.get = async () => {
    return await Product.find({active: true}, 'title slug price');
}

exports.getById = async (id) => {
    return await Product.findById(id);
}

exports.post = async (data) => {
    const product = new Product(data)
    await product.save();
}

exports.put = async (id, data) => {
    await Product.findByIdAndUpdate(id, data)
}

exports.delete = async (id) => {
    await Product.findByIdAndDelete(id)
}
