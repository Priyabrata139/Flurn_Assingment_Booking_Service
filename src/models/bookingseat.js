'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BookingSeat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Booking, {
        foreignKey: 'booking_id',
        as: 'bookingDetails'
      });
      this.belongsTo(models.Seat, {
        foreignKey: 'seat_id',
        as: 'seatDetails'
      });
    }
  }
  BookingSeat.init({
    booking_id: DataTypes.INTEGER,
    seat_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'BookingSeat',
  });
  return BookingSeat;
};