const bcrypt = require("bcrypt");

exports.hasher = async (input) => {
  try {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(input.password, salt);
  } catch (err) {
    throw err;
  }
};

exports.matchPassword = async (incoming, existing) => {
  try {
    return await bcrypt.compare(incoming, existing);
  } catch (err) {
    throw err;
  }
};
