const express = require('express');
const router = express.Router();
const {
  register,
  login,
  logout,
  forgotPassword,
  resetPassword,
  getAllUsers
} = require('../controllers/user.controller');
const { auth, authorizeRoles } = require('../middleware/auth');

router.post('/register', register);
router.post('/login', login);
router.post('/logout', auth, logout);
router.post('/forgotpassword', forgotPassword);
router.put('/resetpassword/:token', resetPassword);
router.get('/getAll', auth, authorizeRoles('restaurant'), getAllUsers);

module.exports = router;
