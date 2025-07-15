const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/bookingController');
const auth = require('../controllers/authController');

router.post('/', auth.verifyToken, bookingController.createBooking);
router.get('/:userId', auth.verifyToken, bookingController.getUserBookings);

module.exports = router;
