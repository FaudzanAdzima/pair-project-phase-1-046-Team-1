'use strict';

let data = [
  {
    name: 'admin',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'customer',
    createdAt: new Date(),
    updatedAt: new Date()
  }
]

module.exports = {
  up:  (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Roles', data)
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  down:  (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Roles', null, {})
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
