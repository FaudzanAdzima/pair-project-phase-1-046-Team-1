'use strict';
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);
let data = [
  {
    firstName: 'Abdul',
    lastName: 'Fattah',
    email: 'abdulfattah.1994@gmail.com',
    password: bcrypt.hashSync('123456', salt),
    RoleId: 1,
    createdAt: new Date(),
    updatedAt: new Date()
  }
]

module.exports = {
  up:  (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', data)
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
    return queryInterface.bulkDelete('Users', null, {})
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
