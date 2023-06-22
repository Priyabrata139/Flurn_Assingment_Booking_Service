const express = require('express');

const seatRoute = require('./seat-routes');

const bookingRoute = require('./booking-routes');
const router = express.Router();



router.use('/seats', seatRoute);
router.use('/bookings', bookingRoute);


module.exports = router;