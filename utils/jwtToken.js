const Token = require('../models/token');
const jwt = require('jsonwebtoken');

const newToken = async (user, res) => {
  const newToken = await Token.create({
    val: jwt.sign({ email: user.email }, process.env.SECRET),
    email: user.email
  });

  return res.status(200).send({
    message: 'Success',
    data: { user: user, token: newToken }
  });
};

module.exports = newToken;
