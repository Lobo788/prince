const express = require('express');
const router = express.Router();
const auth = require('../controllers/authController');

router.post('/register', auth.register);
router.post('/login', auth.login);
router.post('/google-login', auth.googleLogin);
router.get('/verify', auth.verifyToken, (req, res) => {
  res.json({ message: 'Token verified', userId: req.userId, role: req.userRole });
});

module.exports = router;
