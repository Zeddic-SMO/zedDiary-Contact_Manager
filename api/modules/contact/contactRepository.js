const { Contact } = require("./contactSchema");

// @Desc - Check if contact exists
// @Returns - a MongoDB object if contact exists
exports.isContact = async (input) => {
  try {
    return await Contact.findOne({
      $or: [
        { contact_email: input.contact_email },
        { contact_phone: input.contact_phone },
      ],
    });
  } catch (err) {
    throw err;
  }
};

// @Desc - Create New Contact
// @Returns - a MongoDB object
exports.newContact = async (input) => {
  try {
    return await Contact.create(input);
  } catch (err) {
    throw err;
  }
};

// @Desc - Get all the contacts of a login user
// @access - private | User
exports.userContacts = async (id) => {
  try {
    return await Contact.find({ user: id });
  } catch (err) {
    throw err;
  }
};

// @Desc - Update a particular contact using it's ID
// @access - private | User
exports.updateContact = async (id, input) => {
  try {
    return await Contact.findByIdAndUpdate(id, input, { new: true });
  } catch (err) {
    throw err;
  }
};

// @Desc - Delete a particular contact using it's ID
// @access - private | User
exports.deleteContact = async (id) => {
  try {
    return await Contact.findByIdAndDelete(id);
  } catch (err) {
    throw err;
  }
};
