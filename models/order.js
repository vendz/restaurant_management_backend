const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  restaurant: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: [true, 'Restaurant is required']
  },
  customer: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: [true, 'Customer is required']
  },
  items: [
    {
      id: {
        type: mongoose.Schema.ObjectId,
        ref: 'Menu',
        required: [true, 'Menu id is required']
      },
      name: {
        type: String,
        required: [true, 'Menu name is required']
      },
      quantity: {
        type: Number,
        required: [true, 'Quantity is required'],
        default: 1
      }
    }
  ],
  status: {
    type: String,
    enum: ['pending', 'accepted', 'rejected', 'delivered'],
    default: 'pending'
  }
});

module.exports = mongoose.model('Order', orderSchema);
