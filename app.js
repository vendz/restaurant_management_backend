require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const userRoutes = require('./routes/user.routes');

const corsOptions = {
  origin: '*',
  credentials: true,
  optionSuccessStatus: 200
};

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors(corsOptions));
app.use('/user', userRoutes);

app.get('/', (req, res) => {
  res.send('API is Up and Running...');
});

mongoose.set('strictQuery', false);
mongoose
  .connect(process.env.MONGO_URI)
  .then((res) => console.log('Connected to MongoDB...'))
  .catch((err) => console.log(err));

const port = process.env.port || 3000;
app.listen(port, () => {
  console.log(`server is listning on port ${port}...`);
});
