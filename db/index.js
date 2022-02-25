const db = require('./connect');
const ProductModel = require('./products');
const SellerModel = require('./sellers');
const products = require('./dbUtils');
const sellers = require('./dbUtils');

module.exports = {
   db,
   ProductModel,
   SellerModel,
   products,
   sellers
};