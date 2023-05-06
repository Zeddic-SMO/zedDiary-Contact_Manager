const jwtHandler = require("../helpers/jwtHandler");
const isLoginUser = async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    if (!authorization) {
      throw new Error("Access Denied. Kindly login to continue");
    }
    // extract token from request header
    const token = authorization.split(" ")[1];

    // verify token
    const user = await jwtHandler.tokenVerificator(token);

    req.user = user;
    next();
  } catch (err) {
    res.status(401).json({ status: "fail", message: err.message });
  }
};

module.exports = isLoginUser;
