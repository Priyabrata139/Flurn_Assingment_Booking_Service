const { StatusCodes } = require("http-status-codes");

const { User, Booking, Seat, SeatPricing, BookingSeat } = require("../models");

const { BookingRepository } = require("../repositories");
const AppError = require("../utils/errors/app-error");
const { Op } = require("sequelize");

const bookingRepository = new BookingRepository();

async function getAllBookings(query) {
  try {
    if (query.userIdentifier) {
      const email_pn = query.userIdentifier;
      var emailId, phoneNum;
      var user;
      if (email_pn.includes("@")) {
        emailId = email_pn;
        user = await User.findOne({
          where: {
            email: emailId,
          },
        });
      } else {
        phoneNum = email_pn;
        user = await User.findOne({
          where: {
            phoneNumber: phoneNum,
          },
        });
      }

      if (!user) {
        throw new AppError("User not found", StatusCodes.BAD_REQUEST);
      }
      const user_id = user.dataValues.id;
      const bookings = await Booking.findAll({
        where: {
          user_id: user_id,
        },
        include: [
          {
            model: BookingSeat,
            include: [
              {
                model: Seat,
                as: "seatDetails",
              },
            ],
          },
        ],
      });
      return bookings;
    } else {
      throw new AppError(
        "userIdentifier missing in the incomeing request",
        StatusCodes.BAD_REQUEST
      );
    }
  } catch (error) {
    console.log(error);
    throw new AppError(error.message, error.statusCode);
  }
}

async function createBooking(data) {
  try {
    const seatsIds = JSON.parse(data.seatIds);

    // check the user exsist or not

    const user = await User.findOne({
      where: {
        phoneNumber: data.phoneNumber,
      },
    });

    if (!user) {
      throw new AppError(
        [`The user with this (${data.phoneNumber}) phoneNumber is not existe`],
        StatusCodes.BAD_REQUEST
      );
    }

    // check weather seats are already booked or not
    const bookedSeats = await Seat.findAll({
      where: {
        id: {
          [Op.in]: seatsIds,
        },
        is_booked: true,
      },
    });

    if (bookedSeats.length > 0) {
      var errorMessage = "";
      bookedSeats.forEach((seat) => {
        errorMessage += `${seat.dataValues.id}` + ",";
      });
      throw new AppError(
        [`This seats are already booked ` + errorMessage],
        StatusCodes.BAD_REQUEST
      );
    }

    const availableSeats = await Seat.findAll({
      where: {
        id: {
          [Op.in]: seatsIds,
        },
      },
    });

    var availableSeatsId = [];
    availableSeats.forEach((seat) => {
      availableSeatsId.push(seat.dataValues.id);
    });

    var availableSeatsClass = [];
    availableSeats.forEach((seat) => {
      availableSeatsClass.push(seat.dataValues.seat_class);
    });

    // calculate price

    var totalPrice = 0;
    for (const seat of availableSeats) {
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
      totalPrice = Boolean(normalPrice) ? normalPrice : (Boolean(maxPrice) ? maxPrice : minPrice);
    } else if (percentage > 60) {
      totalPrice = Boolean(maxPrice) ? maxPrice : normalPrice;
    }
    
    }

    // update status of booking for seats

    const updateSeats = await Seat.update(
      {
        is_booked: true,
      },
      {
        where: {
          id: {
            [Op.in]: availableSeatsId,
          },
        },
      }
    );

    // update totalseat-bookedseats count for each set class

    availableSeatsClass.forEach(async (className) => {
      const Class = await SeatPricing.findOne({
        where: {
          seat_class: className,
        },
      });

      Class.increment("booked_Seats", { by: 1 });
      Class.decrement("total_seats", { by: 1 });
    });

    const userId = user.dataValues.id;
    const booking = await bookingRepository.create({
      user_id: userId,
    });

    // insert BookingSeats

    for (const seat of availableSeatsId) {
      const bookingSeat = await BookingSeat.create({
        booking_id: booking.id,
        seat_id: seat,
      });
    }

    return {
      booking_id: booking.id,
      total_ammount: totalPrice,
    };
  } catch (error) {
    console.log(error);
    if (error.name == "SequelizeValidationError") {
      let explanation = [];
      error.errors.forEach((err) => {
        explanation.push(err.message);
      });
      throw new AppError(explanation, StatusCodes.BAD_REQUEST);
    }

    throw new AppError(error.message, StatusCodes.INTERNAL_SERVER_ERROR);
  }
}

module.exports = {
  getAllBookings,
  createBooking,
};
