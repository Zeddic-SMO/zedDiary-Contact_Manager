const repository = require("./authRepository");
const passwordOperator = require("../../helpers/passwordHasher");
const jwtHandler = require("../../helpers/jwtHandler");
const linkGenerator = require("../../helpers/linkGenerator");
const tribearcMailer = require("../../services/email/mailer");
const { regInputValidator } = require("../../helpers/inputValidator");
const { userRegInputValidator } = require("./authSchema");

/****************************
 * **************************
 * @Desc - Create a new user and send the user an account verification email
 * @access - Public
 */
exports.SignUp = async (req, res) => {
  try {
    // validating user input
    const validInput = await regInputValidator(userRegInputValidator, req.body);

    // checking for duplicate
    let user = await repository.isUser(validInput);
    if (user) {
      console.log(user);
      throw new Error("Email already in use");
    }

    //hashing user inputted password if no duplicate found
    validInput.password = await passwordOperator.hasher(validInput);

    // Generate user account verification token
    const token = await jwtHandler.tokenGenerator({ email: validInput.email });

    // Generate user verification link
    const verificationLink = await linkGenerator.verificationLinkGenerator(
      token
    );

    // Email user the verification link generated
    const emailStatus = await tribearcMailer(
      validInput.email,
      verificationLink
    );

    // Save User records in the database
    const { repeat_password, ...others } = validInput;

    user = await repository.createUser({
      ...others,
      verifyToken: token,
    });

    // successful operation
    const { password, isVerified, ...Others } = user._doc;
    res.status(200).json({
      status: "success",
      message: "Registration Successfull. Verify Account!",
      user: { ...Others },
    });
  } catch (err) {
    res.status(401).json({
      status: "fail",
      message: err.message,
    });
  }
};

/*************************
 * ***********************
 * @Desc - Allows a user to supply his login credentails to login
 * @returns - a JWT which is used for authentication
 */
exports.SignIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    // validate the request body
    if (!email || !password) {
      throw new Error("All fields are required");
    }

    // check if user exist
    let user = await repository.isUser(req.body);
    if (!user) {
      throw new Error("Invalid login credentials");
    }

    // match inputted password
    const isValidUser = await passwordOperator.matchPassword(
      password,
      user.password
    );
    if (!isValidUser) {
      throw new Error("Invalid login credentials");
    }

    // generate token
    const access_token = await jwtHandler.tokenGenerator({
      id: user._id,
      isVerified: user.isVerified,
    });

    // successful operation response
    res.status(200).json({
      status: "success",
      message: "Welcome Back to ZedDiary",
      user: { access_token, id: user._id },
    });
  } catch (err) {
    res.status(401).json({
      status: "fail",
      message: err.message,
    });
  }
};

/*************************
 * ***********************
 * @Desc - Allows a user to verify account using the verification email sent
 * @returns - updates user records as verified
 */
exports.VerifyMe = async (req, res) => {
  try {
    // Extract token from the link
    const { token } = req.params;

    // Verify the token
    const status = await jwtHandler.tokenVerificator(token);

    // find user and check if token correspond to the token saved in the database
    const user = await repository.isUser(status);
    if (user) {
      if (user.verifyToken !== token) {
        throw new Error("Invalid Link");
      }
    }

    // update user record as verified
    const verified = await repository.updateUser(user._id, {
      isVerified: true,
      verifyToken: null,
    });

    // successful operation response
    res.status(200).json({
      status: "success",
      message: "Verification successful",
      verified,
    });
  } catch (err) {
    res.status(401).json({
      status: "fail",
      message: err.message,
    });
  }
};
