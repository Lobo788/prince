const Booking = require('../models/Bookings');

exports.createBooking = async (req, res) => {
  try {
    const booking = new Booking(req.body);
    await booking.save();
    res.json({ message: 'Booking created', booking });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getUserBookings = async (req, res) => {
  const bookings = await Booking.find({ userId: req.params.userId }).populate('userId');
  res.json(bookings);
};
