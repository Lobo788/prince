const Utensil = require('../models/Utensil');

exports.addUtensil = async (req, res) => {
  try {
    const utensil = new Utensil(req.body);
    await utensil.save();
    res.json({ message: 'Utensil added', utensil });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getUtensilsByBooking = async (req, res) => {
  const utensils = await Utensil.find({ bookingId: req.params.bookingId });
  res.json(utensils);
};
