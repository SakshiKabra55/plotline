const schema = require('./schema.js');
const query = require('./query.js');

const resolvers = {
   ...query,
};

module.exports.resolver = resolvers;
module.exports.schema = schema;