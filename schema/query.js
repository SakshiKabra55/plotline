const {products} = require('../db/')
//const {sellers} = require('../db/')

const query = {
   /*products: async ({limit}, context) => {
      return await products.getAllProducts(limit)
   },

   sellers: async ({limit}, context) => {
      return await sellers.getAllSellers(limit)
   },*/

   productNames: async ({sellerName}, context) => {
      return await products.getProductsBySellerName(sellerName)
   }
};

module.exports = query