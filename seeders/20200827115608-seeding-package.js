'use strict';
let data = [
  {
   name: 'Daily Cleaning',
   duration: 60,
   price: 100000,
   description: 'Nyapu, ngepel, cuci piring',
   createdAt: new Date,
   updatedAt: new Date
  },
  {
   name: 'Air Conditioner Cleaning',
   duration: 60,
   price: 200000,
   description: 'Bersihin AC',
   createdAt: new Date,
   updatedAt: new Date
  },
  {
    name: 'Toilet Cleaning',
    duration: 60,
    price: 100000,
    description: 'Nyapu, ngepel, cuci piring',
    createdAt: new Date,
    updatedAt: new Date
   },
   {
    name: 'Garden Maintenance',
    duration: 60,
    price: 200000,
    description: 'Bersihin AC',
    createdAt: new Date,
    updatedAt: new Date
   }
]
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Packages', data)
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

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Packages', null, {})
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};