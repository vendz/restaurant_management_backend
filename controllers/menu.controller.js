const Menu = require('../models/menu');
var mongoose = require('mongoose');

const addItem = async (req, res) => {
  try {
    const { name, price, description } = req.body;
    const newItem = {
      name: name,
      price: price,
      description: description
    };
    const restro = await Menu.findOne({ restaurant: req.user._id });
    if (!restro) {
      const newMenu = new Menu({
        restaurant: req.user._id,
        menu: [newItem]
      });
      await newMenu.save();
      res.status(201).json(newItem);
    } else {
      restro.menu.push(newItem);
      await restro.save({ validateBeforeSave: false });
      res.status(201).json(newItem);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteItem = async (req, res) => {
  try {
    const restro = await Menu.findOne({ restaurant: req.user._id });
    if (!restro) {
      return res.status(404).json({ error: 'Restaurant not found' });
    }
    const menu = restro.menu.filter(
      (item) => item._id.toString() !== req.params.id.toString()
    );
    await Menu.findOneAndUpdate(
      { restaurant: mongoose.Types.ObjectId(req.user._id) },
      { $set: { menu: menu } },
      {
        new: true,
        runValidators: true,
        useFindAndModify: false
      }
    );
    res.status(200).json({ message: 'Item deleted successfully' });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getItems = async (req, res) => {
  try {
    const restro = await Menu.findOne({ restaurant: req.params.id });
    if (!restro) {
      return res.status(404).json({ error: 'Restaurant not found' });
    }
    res.status(200).json(restro.menu);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  addItem,
  deleteItem,
  getItems
};
