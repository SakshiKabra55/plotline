const { buildSchema } = require('graphql');

const schema = buildSchema(`
   type Query {
      productNames(sellerName: String): [Product]
   }
   type Product {
      name: String!
      sellerName: String!
      productId: Int!
      price: Int!
   }
   type ProductNames {
      productNames: [Product]
   }
`);

module.exports = schema;


/*
const schema = buildSchema(`
   type Query {
      products(limit: Int): [Product]
      sellers(limit: Int): [Seller]
      productNames(sellerName: String): [Product]
   }
   type Product {
      name: String!
      sellerName: String!
      productId: Int!
      price: Int!
   }
   type Seller {
      sellerName: String!
      sellerId: Int!
      products: [String!]!
   }
   type Products {
      products: [Product]
   }
   type Sellers {
      sellers: [Seller]
   }
   type ProductNames {
      productNames: [Product]
   }
`);
*/