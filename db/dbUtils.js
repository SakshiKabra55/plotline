const ProductModel = require('./products');
//const SellerModel = require('./sellers');

/*const getAllProducts = async (limit) => {
   return await ProductModel.find({}).limit(limit);
}

const getAllSellers = async (limit) => {
   return await SellerModel.find({}).limit(limit);
}*/

const getProductsBySellerName = async (sellerName) => {
   return await ProductModel.find({sellerName});
}


module.exports = {
   /*getAllProducts,
   getAllSellers,*/
   getProductsBySellerName
}