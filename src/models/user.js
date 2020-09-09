'use strict';
const sequelize = require('../../database/connection');

const {
  Model, DataTypes
} = require('sequelize');
const Post = require('./post')(sequelize, DataTypes);

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  User.init({
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'user',
  });

  User.hasMany(Post, {
    foreignKey: 'user_id'
  });

  return User;
};