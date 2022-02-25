const { config } = require( 'dotenv');

config();

module.exports = {
   port: process.env.PORT || 3000,
   graphqlPath: process.env.GRAPHQL_PATH || '/graphql',
   dbUrl: process.env.DB_URL || 'mongodb+srv://Sakshi:TEST123@cluster0.qj5sb.mongodb.net/plotlineDB?retryWrites=true&w=majority',
}