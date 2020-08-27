'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   return queryInterface.bulkInsert('Staffs', [
     {
      firstName: 'John',
      lastName: 'Doe',
      email: 'johndoe@mail.com',
      phone: '08541133166',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      firstName: 'Jajang',
      lastName: 'Mulyana',
      email: 'jamul@mail.com',
      phone: '0854646566',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      firstName: 'Elie',
      lastName: 'Aiboy',
      email: 'elie@mail.com',
      phone: '0854199875',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      firstName: 'Rudi',
      lastName: 'Widodo',
      email: 'jrudi@mail.com',
      phone: '85468513845',
      createdAt: new Date,
      updatedAt: new Date
    },
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Staffs', null, {});
  }
};
