const mongoose = require("mongoose");

const DBConnection = async () => {
  return await mongoose.connect(process.env.MONGO_URL);
};
module.exports = DBConnection;
