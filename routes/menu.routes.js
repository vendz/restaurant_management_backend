const express = require('express');
const router = express.Router();
const {
  addItem,
  deleteItem,
  getItems
} = require('../controllers/menu.controller');
const { auth, authorizeRoles } = require('../middleware/auth');

router.post('/add', auth, authorizeRoles('restaurant'), addItem);
router.delete('/delete/:id', auth, authorizeRoles('restaurant'), deleteItem);
router.get('/getAll/:id', getItems);

module.exports = router;
