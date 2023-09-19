const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/index");

const bodyParser = require("body-parser");
const ERROR_NOT_FOUND = require("./errors/errors");
const { PORT = 3000 } = process.env;

const app = express();
app.use(express.json());

app.use(bodyParser.json());
app.use((req, res, next) => {
  req.user = {
   // _id: "a28722e7-954c-4bb9-8b79-c4a8de175d4b",
  };

  next();
});

mongoose.connect("mongodb://localhost:27017/mestodb", {
  useNewUrlParser: true,
});

app.use(router);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
