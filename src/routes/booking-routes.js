const express = require('express');
const { BookingController } = require('../controllers');
const { BookingMiddlewares } = require('../middlewares');


const router = express.Router();

router.get('/',BookingController.getAllBookings);

router.post('/',
BookingMiddlewares.validateCreateRequest,
BookingController.createBooking);

module.exports=router;
