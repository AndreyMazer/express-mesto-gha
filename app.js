const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const router = require('./routes/index');

const { PORT = 3000 } = process.env;

const app = express();
app.use(express.json());

app.use(bodyParser.json());
app.use((req, res, next) => {
  req.user = {
    _id: '650e980e059b529c0f26d773',
  };

  next();
});

mongoose.connect('mongodb://127.0.0.1:27017/mestodb', {
  useNewUrlParser: true,
});

app.use(router);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});