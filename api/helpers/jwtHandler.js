const jwt = require("jsonwebtoken");
const SECRET = process.env.JWT_SECRET;

// Generates token
exports.tokenGenerator = async (user) => {
  try {
    return jwt.sign(user, SECRET, { expiresIn: "10h" });
  } catch (err) {
    throw err;
  }
};

// Verify token
exports.tokenVerificator = async (token) => {
  try {
    let user;
    jwt.verify(token, SECRET, (err, payload) => {
      if(err){
        throw err
      }
      user = payload;
    });
    return user;
  } catch (err) {
    throw err;
  }
};
