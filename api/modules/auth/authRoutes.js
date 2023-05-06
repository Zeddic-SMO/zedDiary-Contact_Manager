const authRoutes = require("express").Router();
const { SignUp, SignIn, VerifyMe } = require("./authController");

authRoutes.post("/signup", SignUp);
authRoutes.post("/signin", SignIn);
authRoutes.get("/verifyMe/:token", VerifyMe);

module.exports = authRoutes;
