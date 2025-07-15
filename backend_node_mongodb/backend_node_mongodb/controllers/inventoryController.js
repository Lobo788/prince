const Inventory = require('../models/Inventory');

exports.addItem = async (req, res) => {
  try {
    const item = new Inventory(req.body);
    await item.save();
    res.json({ message: 'Inventory item added', item });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getInventory = async (req, res) => {
  const items = await Inventory.find();
  res.json(items);
};
