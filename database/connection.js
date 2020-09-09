const Sequelize = require('sequelize');
const config = require('./config/config');

let sequelize;
if (process.env.NODE_ENV === 'production') {
    sequelize = new Sequelize(config.production);
} else if (process.env.NODE_ENV === 'test') {
    sequelize = new Sequelize(config.test);
} else {
    sequelize = new Sequelize(config.development);
}


module.exports = sequelize;