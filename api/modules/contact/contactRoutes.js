const contactRoute = require("express").Router();
const isLoginUser = require("../../middlewares/isUser");
const {
  NewContact,
  UserContacts,
  UpdateContact,
  DeleteContact,
} = require("./contactController");

contactRoute.post("/contact", isLoginUser, NewContact);
contactRoute.get("/contact", isLoginUser, UserContacts);
contactRoute.post("/contact/:id", isLoginUser, UpdateContact);
contactRoute.delete("/contact/:id", isLoginUser, DeleteContact);

module.exports = contactRoute;
