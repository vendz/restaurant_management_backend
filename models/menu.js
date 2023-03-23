const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const menuSchema = new Schema({
  restaurant: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: [true, 'Restaurant is required']
  },
  menu: [
    {
      name: {
        type: String,
        required: [true, 'Name is required'],
        maxLength: [30, 'Your name cannot exceed 30 characters'],
        minLength: [3, 'Your name must be at least 3 characters long']
      },
      price: {
        type: Number,
        required: [true, 'Price is required'],
        maxLength: [30, 'Your price cannot exceed 30 characters'],
        minLength: [3, 'Your price must be at least 3 characters long']
      },
      description: {
        type: String,
        required: [true, 'Description is required'],
        minLength: [3, 'Your description must be at least 3 characters long']
      }
    }
  ]
});

module.exports = mongoose.model('Menu', menuSchema);
