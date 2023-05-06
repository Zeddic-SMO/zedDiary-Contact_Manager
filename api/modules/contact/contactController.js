const { regInputValidator } = require("../../helpers/inputValidator");
const { contactInputValidator } = require("./contactSchema");
const repository = require("./contactRepository");

/******************
 * @Desc - Create a new contact
 * @returns - a mongodb object
 * @access - private | Login User
 */
exports.NewContact = async (req, res) => {
  try {
    // console.log(req.user);
    // validate input
    const validInput = await regInputValidator(contactInputValidator, req.body);

    // check for duplicates
    let contact = await repository.isContact(validInput);
    if (contact) {
      throw new Error("Contact Already Exists");
    }

    //save records
    contact = await repository.newContact({ ...validInput, user: req.user.id });

    // successful operation response
    res
      .status(200)
      .json({ status: "success", message: "New contact added successfully" });
  } catch (err) {
    res.status(401).json({ status: "fail", message: err.message });
  }
};

/******************
 * @Desc - Get all the contacts of a login user
 * @returns - an array of objects containing all user's contacts
 * @access - private | Login User
 */
exports.UserContacts = async (req, res) => {
  try {
    // fetch all contacts with a login user id
    const contacts = await repository.userContacts(req.user.id);
    if (!contacts) {
      throw new Error("No Contacts found");
    }

    // successful operation response
    res.status(200).json({ status: "success", contacts });
  } catch (err) {
    res.status(401).json({ status: "fail", message: err.message });
  }
};

/*****************
 * @Desc - Update a user's contact
 * @return - a success message if contact updated
 * @access - private | User
 */
exports.UpdateContact = async (req, res) => {
  try {
    // grap the contact ID
    const { id } = req.params;

    // update contact using the contact ID
    const contact = await repository.updateContact(id, req.body);

    // success operation response
    res
      .status(200)
      .json({ status: "success", message: "Contact successfully updated" });
  } catch (err) {
    res.status(401).json({ status: "fail", message: err.message });
  }
};

/*********************
 * @Desc - Delete a single a contact
 * @return - a success message if contact deleted
 * @access - private | User
 */
exports.DeleteContact = async (req, res) => {
  try {
    const { id } = req.params;
    // delete the contact
    await repository.deleteContact(id);

    // success operation response
    res.status(200).json({ status: "success", message: "Contact Deleted" });
  } catch (err) {
    res.status(401).json({ status: "fail", message: err.message });
  }
};
