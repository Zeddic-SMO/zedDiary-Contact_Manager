const authRoutes = require("express").Router();
const {
  SignUp,
  SignIn,
  VerifyMe,
  GetUser,
  UpdateUser,
} = require("./authController");

authRoutes.post("/signup", SignUp);
authRoutes.post("/signin", SignIn);
authRoutes.get("/verifyMe/:token", VerifyMe);
authRoutes.get("/user/:id", GetUser);
authRoutes.put("/user/:id", UpdateUser);

module.exports = authRoutes;
