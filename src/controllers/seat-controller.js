const { StatusCodes } = require('http-status-codes');

const { SeatService } = require('../services');
const { SuccessResponse, ErrorResponse } = require('../utils/common');



/**
 * GET : /seats
 * req-body {}
 */
async function getSeats(req, res) {
    try {
        const seats = await SeatService.getSeats();
        SuccessResponse.data = seats;
        return res
                .status(StatusCodes.OK)
                .json(SuccessResponse);
    } catch(error) {
        console.log(error);
        ErrorResponse.error = error;
        return res
                .status(error.statusCode)
                .json(ErrorResponse);
    }
}

/**
 * GET : /seats/:id 
 * req-body {}
 */
async function getSeat(req, res) {
    try {
        const seat = await SeatService.getSeat(req.params.id);
        SuccessResponse.data = seat;
        return res
                .status(StatusCodes.OK)
                .json(SuccessResponse);
    } catch(error) {
        ErrorResponse.error = error;
        return res
                .status(error.statusCode)
                .json(ErrorResponse);
    }
}

module.exports = {
    
    getSeat,
    getSeats
}