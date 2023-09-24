const User = require("../models/user");
const {
  ERROR_VALIDATION,
  ERROR_NOT_FOUND,
  ERROR_SERVER,
  SUCCESSFUL_ANSWER,
} = require("../errors/errors");

const getAllUsers = (req, res) => {
  User.find({})
    .then((users) => {
      res.send(users);
    })
    .catch((err) => {
      res.status(ERROR_SERVER).send({ message: "Ошибка сервера" });
    });
};

const getUser = (req, res) => {
  User.findId(req.params.userId)
    .orFail(() => new Error("NotFoundError"))
    .then((user) => {
      res.send(user);
    })
    .catch((err) => {
      if (err.name === "CastError") {
        res
          .status(ERROR_VALIDATION)
          .send({ message: "Введены некорректные данные" });
      } else if (err.message === "NotFoundError") {
        res.status(ERROR_NOT_FOUND).send({ message: "Пользователь не найден" });
      } else {
        res.status(ERROR_SERVER).send({ message: "Ошибка сервера" });
      }
    });
};

const createUser = (req, res) => {
  const { name, about, avatar } = req.body;
  User.create({ name, about, avatar })
    .then((user) => {
      res.status(SUCCESSFUL_ANSWER).send(user);
    })
    .catch((err) => {
      if (err.name === "ValidationError") {
        res
          .status(ERROR_VALIDATION)
          .send({ message: "Введены некорректные данные" });
      } else {
        res.status(ERROR_SERVER).send({ message: "Ошибка сервера" });
      }
    });
};

const updateProfile = (req, res) => {
  const { name, about } = req.body;
  User.findAndUpdate(
    req.user._id,
    { name, about },
    { new: true, runValidators: true }
  )
    .orFail(() => new Error("NotFoundError"))
    .then((user) => {
      res.send(user);
    })
    .catch((err) => {
      if (err.name === "ValidationError") {
        res.status(ERROR_VALIDATION);
      } else if (err.message === "NotFoundError") {
        res.status(ERROR_NOT_FOUND).send({ message: "Пользователь не найден" });
      } else {
        res.status(ERROR_SERVER).send({ message: "Ошибка сервера" });
      }
    });
};

const updateAvatar = (req, res) => {
  const { avatar } = req.body;
  User.findAndUpdate(
    req.user._id,
    { avatar },
    { new: true, runValidators: true }
  )
    .orFail(() => new Error("NotFoundError"))
    .then((user) => {
      res.send(user);
    })
    .catch((err) => {
      if (err.name === "ValidationError") {
        res
          .status(ERROR_VALIDATION)
          .send({ message: "Введены некорректные данные" });
      } else if (err.message === "NotFoundError") {
        res.status(ERROR_NOT_FOUND).send({ message: "Пользователь не найден" });
      } else {
        res.status(ERROR_SERVER).send({ message: "Ошибка сервера" });
      }
    });
};

module.exports = {
  getAllUsers,
  getUser,
  createUser,
  updateProfile,
  updateAvatar,
};
