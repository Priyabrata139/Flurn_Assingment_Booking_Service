const express = require('express');
const { SeatController } = require('../controllers');
const router = express.Router();

router.get('/',SeatController.getSeats);

router.get('/:id',SeatController.getSeat);


module.exports=router;

