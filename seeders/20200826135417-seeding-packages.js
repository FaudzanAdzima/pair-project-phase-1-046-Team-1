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
   return queryInterface.bulkInsert('Packages', [
     {
      service: 'Bed Rooms Package',
      duration: 60,
      price: 150000,
      createdAt: new Date,
      updatedAt: new Date
     },
     {
      service: 'Bath Rooms Package',
      duration: 60,
      price: 150000,
      createdAt: new Date,
      updatedAt: new Date
     },
     {
      service: 'Living Rooms Package',
      duration: 60,
      price: 150000,
      createdAt: new Date,
      updatedAt: new Date
     },
     {
      service: 'Kitchen Package',
      duration: 60,
      price: 150000,
      createdAt: new Date,
      updatedAt: new Date
     },
     {
      service: 'Garden Package',
      duration: 60,
      price: 150000,
      createdAt: new Date,
      updatedAt: new Date
     },
     {
      service: 'Garrage Package',
      duration: 60,
      price: 150000,
      createdAt: new Date,
      updatedAt: new Date
     },
     {
      service: 'Full Package',
      duration: 360,
      price: 500000,
      createdAt: new Date,
      updatedAt: new Date
     },
   ])
  },

  down: (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkdelete('Packages', null, {})
  }
};
