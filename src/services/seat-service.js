const { StatusCodes } = require("http-status-codes");

const { SeatPricing, Seat } = require("../models");
const { SeatRepository } = require("../repositories");
const AppError = require("../utils/errors/app-error");

const seatRepository = new SeatRepository();

async function getSeats() {
  try {


    const seats = await Seat.findAll({
        order: [['seat_class', 'ASC']]
    });
    return seats;
  } catch (error) {
    console.log(error);
    throw new AppError(
      "Cannot fetch data of all the seats",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function getSeat(id) {
  try {
    const seat = await seatRepository.get(id);

    const price = await SeatPricing.findOne({
      where: {
        seat_class: seat.dataValues.seat_class,
      },
    });
    let totalSeats = 0,
      bookedSeats = 0,
      minPrice,
      normalPrice,
      maxPrice;
    totalSeats = parseInt(price.dataValues.total_seats);
    bookedSeats = parseInt(price.dataValues.booked_seats);
    minPrice = parseInt(price.dataValues.min_price);
    normalPrice = parseInt(price.dataValues.normal_price);
    maxPrice = parseInt(price.dataValues.max_price);

    const percentage = (bookedSeats / totalSeats) * 100;
    if (percentage < 40) {
      totalPrice = Boolean(minPrice) ? minPrice : normalPrice;
    } else if (percentage <= 60) {
      totalPrice = normalPrice;
    } else if (percentage > 60) {
      totalPrice = maxPrice === NaN ? normalPrice : maxPrice;
    }

    return {
      seatDetails: seat,
      seatPrice: totalPrice,
    };
  } catch (error) {
    if (error.statusCode == StatusCodes.NOT_FOUND) {
      throw new AppError(
        "The seat you requested is not present",
        error.statusCode
      );
    }
    throw new AppError(
      "Cannot fetch data of all the seats",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function updateSeat(data, id) {
  try {
    const seat = await seatRepository.update(data, id);
    return seat;
  } catch (error) {
    console.log(error);
    if (error.statusCode == StatusCodes.NOT_FOUND) {
      throw new AppError(
        "The seat you requested to update is not present",
        error.statusCode
      );
    } else if (error.name == "SequelizeValidationError") {
      let explanation = [];
      error.errors.forEach((err) => {
        explanation.push(err.message);
      });
      throw new AppError(explanation, StatusCodes.BAD_REQUEST);
    }
    throw new AppError(
      "Cannot fetch data of all the seats",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}
module.exports = {
  getSeat,
  getSeats,
  updateSeat,
};
