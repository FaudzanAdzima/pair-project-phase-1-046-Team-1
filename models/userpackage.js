'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserPackage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      UserPackage.belongsTo(models.User,({foreignKey:'UserId'}))
      UserPackage.belongsTo(models.Package,({foreignKey:'PackageId'}))
    }
  };
  UserPackage.init({
    status: DataTypes.STRING,
    UserId: DataTypes.INTEGER,
    PackageId: DataTypes.INTEGER

  }, {
    sequelize,
    modelName: 'UserPackage',
  });
  return UserPackage;
};