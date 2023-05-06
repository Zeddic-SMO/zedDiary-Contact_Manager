const mongoose = require("mongoose");
const Joi = require("joi");

// Contact Schema
const contactScema = new mongoose.Schema(
  {
    contact_name: {
      type: String,
      required: true,
    },
    contact_email: {
      type: String,
      require: true,
      unique: true,
    },
    contact_phone: {
      type: Number,
      require: true,
      unique: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
  },
  { timestamps: true }
);

// contact model
const Contact = mongoose.model("contact", contactScema);

// schema validator
const contactInputValidator = Joi.object({
  contact_name: Joi.string().required(),
  contact_email: Joi.string().required(),
  contact_phone: Joi.number().required(),
});

module.exports = { Contact, contactInputValidator };
