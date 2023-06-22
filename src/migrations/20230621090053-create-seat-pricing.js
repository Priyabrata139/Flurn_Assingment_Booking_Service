'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('SeatPricings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      seat_class: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      min_price: {
        type: Sequelize.DECIMAL
      },
      normal_price: {
        type: Sequelize.DECIMAL
      },
      max_price: {
        type: Sequelize.DECIMAL
      },
      total_seats: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      booked_seats: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('SeatPricings');
  }
};