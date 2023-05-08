const { User } = require("./authSchema");

// @Desc - Check is Email exists
// @Returns - User MongoDB Object if Email exists in DB
exports.isUser = async (input) => {
  try {
    return await User.findOne({
      $or: [{ email: input.email }, { _id: input.id }],
    });
  } catch (err) {
    throw err;
  }
};

// @Desc - Create New User
// @Returns - a MongoDB object
exports.createUser = async (input) => {
  try {
    return await User.create(input);
  } catch (err) {
    throw err;
  }
};

// @Desc - Update record of an existing user
// @Returns - a MongoDB object
exports.updateUser = async (id, input) => {
  try {
    return await User.findByIdAndUpdate(id, input, { new: true });
  } catch (err) {
    throw err;
  }
};

// @Desc - Delete a single user using the user ID
// @Returns - null if user is not found
exports.deleteUser = async (id) => {
  try {
    return await User.findByIdAndDelete(id);
  } catch (err) {
    throw err;
  }
};
