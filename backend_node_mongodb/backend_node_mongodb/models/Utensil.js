// models/Utensil.js
const mongoose = require('mongoose');

const UtensilSchema = new mongoose.Schema({
  bookingId: { type: mongoose.Schema.Types.ObjectId, ref: 'Booking' },
  itemName: String,
  quantity: Number,
  returnStatus: { type: String, enum: ['pending', 'returned'], default: 'pending' },
  penalty: { type: Number, default: 0 }
});

module.exports = mongoose.model('Utensil', UtensilSchema);
