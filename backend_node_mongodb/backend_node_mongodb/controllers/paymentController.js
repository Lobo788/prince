const Payment = require('../models/Payment');

exports.addPayment = async (req, res) => {
  try {
    const payment = new Payment(req.body);
    await payment.save();
    res.json({ message: 'Payment recorded', payment });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getUserPayments = async (req, res) => {
  const payments = await Payment.find({ userId: req.params.userId }).populate('bookingId');
  res.json(payments);
};
