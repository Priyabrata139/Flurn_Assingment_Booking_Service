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
    await queryInterface.bulkInsert('seatpricings', [
      {
        seat_class: 'A',
        normal_price: 397.61,
        max_price: 547.20,
        total_seats: 51,
        booked_seats: 0,
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_class: 'B',
        min_price: 183.44,
        normal_price: 441.65,
        max_price: 766.96,
        total_seats: 54,
        booked_seats: 0,
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_class: 'C',
        min_price: 158.47,
        normal_price: 449.40,
        max_price: 678.55,
        total_seats: 54,
        booked_seats: 0,
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_class: 'D',
        min_price: 156.15,
        normal_price: 263.73,
        total_seats: 54,
        booked_seats: 0,
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_class: 'E',
        normal_price: 274.52,
        max_price: 795.68,
        total_seats: 49,
        booked_seats: 0,
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_class: 'F',
        normal_price: 459.66,
        max_price: 694.75,
        total_seats: 48,
        booked_seats: 0,
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_class: 'G',
        normal_price: 296.21,
        total_seats: 46,
        booked_seats: 0,
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_class: 'H',
        normal_price: 477.06,
        total_seats: 48,
        booked_seats: 0,
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_class: 'I',
        normal_price: 451.84,
        max_price: 762.14,
        total_seats: 39,
        booked_seats: 0,
        createdAt: new Date(),
        updatedAT: new Date()
      },
      {
        seat_class: 'J',
        normal_price: 406.24,
        max_price: 868.71,
        total_seats: 57,
        booked_seats: 0,
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
