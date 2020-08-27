'use strict';

module.exports = {
  up:  (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn('UserPackages', 'UserId', {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      }),
      queryInterface.addColumn('UserPackages', 'PackageId', {
        type: Sequelize.INTEGER,
        references: {
          model: 'Packages',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      })
    ])
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  down:  (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn('UserPackages', 'UserId'),
      queryInterface.removeColumn('UserPackages', 'PackageId')
    ])
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
