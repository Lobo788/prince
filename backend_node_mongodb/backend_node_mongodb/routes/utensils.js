const express = require('express');
const router = express.Router();
const utensilController = require('../controllers/utensilController');
const auth = require('../controllers/authController');

router.post('/', auth.verifyToken, utensilController.addUtensil);
router.get('/:bookingId', auth.verifyToken, utensilController.getUtensilsByBooking);

module.exports = router;
