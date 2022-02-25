const { Schema, model } = require('mongoose');

const productSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    sellerName: {
        type: String,
        required: true,
    },
    productId: {
        type: Number,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
});

module.exports = new model('products', productSchema);