const jwt = require('jsonwebtoken');
require('dotenv').config();

const auth = (req, res, next) => {
  const header = req.header('Authorization');
  if (!header) return res.status(401).send({ error: 'Token not found' });

  const token = header.replace('Bearer ', '');
  try {
    const user = jwt.verify(token, process.env.SECRET);
    req.user = user;
    req.token = token;
    next();
  } catch (err) {
    return res.status(403).send({ error: 'Invalid token' });
  }
};

module.exports = auth;
