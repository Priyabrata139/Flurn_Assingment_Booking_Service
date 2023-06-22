'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SeatPricing extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  SeatPricing.init({
    seat_class:{
      type:  DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    min_price: DataTypes.DECIMAL,
    normal_price: DataTypes.DECIMAL,
    max_price: DataTypes.DECIMAL,
    total_seats: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    booked_seats: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'SeatPricing',
  });
  return SeatPricing;
};