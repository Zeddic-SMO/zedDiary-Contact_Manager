const mongoose = require("mongoose");
const Joi = require("joi");

// User Schema
const userSchema = new mongoose.Schema({
  full_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  profile_pic: {
    type: String,
    default: "",
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  verifyToken: {
    type: String,
    required: true,
  },
  password_reset: {
    type: String,
    default: null,
  },
});

// User Model
const User = mongoose.model("user", userSchema);

// Joi validator
const userRegInputValidator = Joi.object({
  full_name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
  repeat_password: Joi.ref("password"),
}).with("password", "repeat_password");

module.exports = { User, userRegInputValidator };
