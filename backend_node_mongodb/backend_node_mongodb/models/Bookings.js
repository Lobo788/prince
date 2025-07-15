// models/Booking.js
const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  eventName: String,
  eventDate: Date,
  eventLocation: String,
  menu: [String], // optional
  status: { type: String, enum: ['pending', 'confirmed', 'completed'], default: 'pending' }
});

module.exports = mongoose.model('Booking', BookingSchema);
