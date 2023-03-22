const User = require('../models/user');
const jwtToken = require('../utils/jwtToken');
const sendMail = require('../utils/sendMail');
const crypto = require('crypto');
require('dotenv').config();

const register = async (req, res) => {
  try {
    const { name, lname, email, password, role } = req.body;
    const userExists = await User.findOne({ email: email });
    if (userExists) {
      return res.status(400).send({ status: 'User already exists' });
    }

    const newUser = await User.create({
      name: name,
      lname: lname,
      email: email,
      password: password,
      role: role
    });

    jwtToken(newUser, res);
  } catch (error) {
    return res.status(500).send({
      message: error.message || 'Some error occurred while creating the user.'
    });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email: email });
    if (!user) {
      return res.status(404).send({ message: 'User not found' });
    }

    const isPasswordMatched = await user.comparePassword(password);
    if (!isPasswordMatched) {
      return res.status(401).send({ message: 'Invalid password' });
    }

    jwtToken(user, res);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
};

const logout = async (req, res) => {
  try {
    const tk = await token.findOneAndDelete({ val: req.token });
    if (tk) {
      return res.status(200).send({ message: 'Logout successful', data: tk });
    } else {
      return res.status(200).send({ message: 'Already logged out' });
    }
  } catch (err) {
    return res
      .status(400)
      .send({ message: 'Error in signing out the user', err });
  }
};

const forgotPassword = async (req, res) => {
  const userData = await User.findOne({ email: req.body.email });
  if (!userData) {
    return res.status(404).send({ message: 'User not found' });
  }
  const resetToken = await userData.getResetPasswordToken();
  userData.save({ validateBeforeSave: false });

  const resetUrl = `${req.protocol}://${req.get(
    'host'
  )}/user/resetpassword/${resetToken}`;
  const message = `Your password reset token is as follows:\n\n${resetUrl}\n\nIf you have not requested this email, then ignore it.`;

  try {
    await sendMail({
      email: userData.email,
      subject: 'Password Recovery',
      message
    });

    res.status(200).send({
      success: true,
      message: `Email sent to: ${userData.email}`
    });
  } catch (err) {
    userData.resetPasswordToken = undefined;
    userData.resetPasswordExpire = undefined;
    await userData.save({ validateBeforeSave: false });
    return res.status(500).send({ message: err.message });
  }
};

const resetPassword = async (req, res) => {
  const resetPasswordToken = req.params.token;

  const userData = await User.findOne({
    resetPasswordToken,
    resetPasswordExpire: { $gt: Date.now() }
  });

  if (!userData) {
    return res.status(400).send({ message: 'Invalid token' });
  }

  userData.password = req.body.password;
  userData.resetPasswordToken = undefined;
  userData.resetPasswordExpire = undefined;
  await userData.save();

  jwtToken(userData, res);
};

module.exports = {
  register,
  login,
  logout,
  forgotPassword,
  resetPassword
};
