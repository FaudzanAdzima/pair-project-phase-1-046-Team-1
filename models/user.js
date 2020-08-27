'use strict';
const {
  Model
} = require('sequelize');
const bcrypt = require('bcryptjs');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    get fullname(){
      return `${this.firstName} ${this.lastName}`
    }
    static associate(models) {
      // define association here
      User.belongsToMany(models.Package,{through:models.UserPackage})
      //super many to many
      User.hasMany(models.UserPackage)
    }
  };
  User.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    phone: DataTypes.STRING,
    address: DataTypes.STRING,
    username: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });

  User.beforeCreate((user, options) => {
    let salt = bcrypt.genSaltSync(10);
    let hash = bcrypt.hashSync("B4c0/\/", salt);
    user.password = hash;
  })
  return User;
};