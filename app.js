const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/index");
const bodyParser = require("body-parser");
const { PORT = 3000 } = process.env;

mongoose.connect("mongodb://127.0.0.1/mestodb", {
  useUrl: true,
});

const app = express();
app.use(express.json());

app.use(bodyParser.json());
app.use((req, res, next) => {
  req.user = {
    _id: "650e980e059b529c0f26d773",
  };

  next();
});

app.use(router);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
