const { Schema, model } = require('mongoose');

const sellerSchema = new Schema({
   sellerName: {
      type: String,
      required: true,
   },
   sellerId: {
      type: Number,
      required: true,
   },
   products: {
      type: Array,
      required: true,
   },
});

module.exports = new model('sellers', sellerSchema);