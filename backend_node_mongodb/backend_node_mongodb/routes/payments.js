const express = require('express');
const router = express.Router();
const paymentController = require('../controllers/paymentController');
const auth = require('../controllers/authController');

router.post('/', auth.verifyToken, paymentController.addPayment);
router.get('/:userId', auth.verifyToken, paymentController.getUserPayments);

module.exports = router;
