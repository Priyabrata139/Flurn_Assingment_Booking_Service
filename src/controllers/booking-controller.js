const { StatusCodes } = require("http-status-codes");

const { BookingService } = require("../services");
const { SuccessResponse, ErrorResponse } = require("../utils/common");

/**
 * GET : /bookings bookings/?userIdentifier=<emailid or phoneNumber>
 * req-body {}
 */
async function getAllBookings(req, res) {
  try {
    const bookings = await BookingService.getAllBookings(req.query);
    SuccessResponse.data = bookings;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    console.log(error);
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
}

/**
 * POST : /bookings
 * req-body {seatIds: [1,2,3,...], username: Priyabrata Maji, phoneNumber: 9749518128}
 */
async function createBooking(req, res) {
  try {
    const booking = await BookingService.createBooking({
      seatIds: req.body.seatIds,
      username: req.body.username,
      phoneNumber: req.body.phoneNumber,
    });
    SuccessResponse.data = booking;
    return res.status(StatusCodes.CREATED).json(SuccessResponse);
  } catch (error) {
    console.log(error);
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
}

module.exports = {
  getAllBookings,
  createBooking,
};
