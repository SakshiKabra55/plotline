const mongoose = require('mongoose');
const envs = require('../env');

mongoose.connect(envs.dbUrl, {
   useNewUrlParser: true,
   useUnifiedTopology: true,
})

module.exports = mongoose.connection