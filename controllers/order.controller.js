var mongoose = require('mongoose');
var Order = require('../models/order');

const createOrder = async (req, res) => {
  try {
    const { restaurant, items } = req.body;
    const order = await Order.findOne({ restaurant: restaurant });
    if (order) {
      return res.status(400).json({ error: 'Order already exists' });
    }

    const newOrder = new Order({
      restaurant: restaurant,
      customer: req.user._id,
      items: items
    });
    await newOrder.save();
    res.status(201).json(newOrder);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getOrders = async (req, res) => {
  try {
    const orders = await Order.find({ restaurant: req.user._id })
      .populate('items.name')
      .populate('customer', '-password -token -__v')
      .populate('restaurant', '-password -token -__v');
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateOrder = async (req, res) => {
  try {
    const order = await Order.findOneAndUpdate(
      { _id: req.params.id },
      { $set: { status: req.body.status } },
      {
        new: true,
        runValidators: true,
        useFindAndModify: false
      }
    );
    if (!order) {
      return res.status(404).json({ error: 'Order not found' });
    }
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteOrder = async (req, res) => {
  try {
    const order = await Order.findOneAndDelete({
      _id: req.params.id
    });
    if (!order) {
      return res.status(404).json({ error: 'Order not found' });
    }
    res.status(200).json({ message: 'Order deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createOrder,
  getOrders,
  updateOrder,
  deleteOrder
};
