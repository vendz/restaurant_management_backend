const express = require('express');
const router = express.Router();
const {
  createOrder,
  getOrders,
  updateOrder,
  deleteOrder
} = require('../controllers/order.controller');
const { auth, authorizeRoles } = require('../middleware/auth');

router.get('/getAll', auth, authorizeRoles('restaurant'), getOrders);
router.post('/create', auth, authorizeRoles('user'), createOrder);
router.put('/update/:id', auth, authorizeRoles('restaurant'), updateOrder);
router.delete('/delete/:id', authorizeRoles('user'), auth, deleteOrder);

module.exports = router;
