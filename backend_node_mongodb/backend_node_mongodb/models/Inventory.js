// models/Inventory.js
const mongoose = require('mongoose');

const InventorySchema = new mongoose.Schema({
  itemName: String,
  quantity: Number,
  threshold: { type: Number, default: 10 },
  type: { type: String, enum: ['utensil', 'grocery', 'disposable'] }
});

module.exports = mongoose.model('Inventory', InventorySchema);
