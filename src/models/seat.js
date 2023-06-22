'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Seat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.BookingSeat, {
            foreignKey: 'seat_id',
            onDelete: 'CASCADE' 
      });
    }
  }
  Seat.init({
    seat_Identifire: {
      type: DataTypes.STRING,
      allowNull: false
    },
    seat_class: {
      type: DataTypes.STRING,
      allowNull: false
    },
    is_booked: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  }, {
    sequelize,
    modelName: 'Seat',
  });
  return Seat;
};