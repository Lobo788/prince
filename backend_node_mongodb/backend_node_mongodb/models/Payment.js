// models/Payment.js
const mongoose = require('mongoose');

const PaymentSchema = new mongoose.Schema({
  bookingId: { type: mongoose.Schema.Types.ObjectId, ref: 'Booking' },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  amountPaid: Number,
  amountPending: Number,
  paymentMode: { type: String, enum: ['cash', 'UPI', 'bank', 'other'] },
  paymentDate: { type: Date, default: Date.now },
  proof: String // image URL or file name
});

module.exports = mongoose.model('Payment', PaymentSchema);
