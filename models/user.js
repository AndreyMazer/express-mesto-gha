const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Поле "name" обязательно к заполнению'],
    minlength: [2, 'Минимальное количество символов не менее 2'],
    maxlength: [30, 'Максимальное количество символов не более 30'],
  },
  about: {
    type: String,
    required: [true, 'Поле "about" обязательно к заполнению'],
    minlength: [2, 'Минимальное количество символов не менее 2'],
    maxlength: [30, 'Максимальное количество символов не более 30'],
  },
  avatar: {
    type: String,
    required: [true, 'Поле "avatar" обязательно к заполнению'],
  },
});

module.exports = mongoose.model("user", userSchema);
