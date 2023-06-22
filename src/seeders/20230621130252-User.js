'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Users', [
      {
        name: 'Priyabrata Maji',
        email: 'priyabratamaji139@gmail.com',
        phoneNumber: '9749518128',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        name: 'Saurav Kumar',
        email: 'msauravkumar@gmail.com',
        phoneNumber: '9749518129',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        name: 'Deepu Kumar',
        email: 'deepuhcverma139@gmail.com',
        phoneNumber: '9749518127',
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        name: 'Timsal Alam',
        email: 'mdtimsalalam139@gmail.com',
        phoneNumber: '9749518126',
        createdAt: new Date(),
        updatedAT: new Date()
      }, {
        name: 'Sandeep Kora',
        email: 'sandeekkora21@gmail.com',
        phoneNumber: '9749518125',
        createdAt: new Date(),
        updatedAT: new Date()
      }
  ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
