const authRoutes = require("express").Router();
const { SignUp, SignIn, VerifyMe, User } = require("./authController");

authRoutes.post("/signup", SignUp);
authRoutes.post("/signin", SignIn);
authRoutes.get("/verifyMe/:token", VerifyMe);
authRoutes.get("/user/:id", User);

module.exports = authRoutes;
