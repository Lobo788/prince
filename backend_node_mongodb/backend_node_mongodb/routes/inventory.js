const express = require('express');
const router = express.Router();
const inventoryController = require('../controllers/inventoryController');
const auth = require('../controllers/authController');

router.post('/', auth.verifyToken, inventoryController.addItem);
router.get('/', auth.verifyToken, inventoryController.getInventory);

module.exports = router;
