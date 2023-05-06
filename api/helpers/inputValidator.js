const Joi = require("joi");
exports.regInputValidator = async (schema, input) => {
  try {
    return await schema.validateAsync(input);
  } catch (err) {
    throw err;
  }
};
