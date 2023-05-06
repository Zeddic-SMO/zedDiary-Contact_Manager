const emailConfig = require("./config");
const axios = require("axios");

const mailer = async (userEmail, verificationLink) => {
  try {
    const data = await emailConfig(userEmail, verificationLink);

    axios
      .post("https://mail.tribearc.com/api/campaigns/send_now.php", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then(({ data }) => {
        console.log(data);
      });
  } catch (err) {
    throw err;
  }
};
module.exports = mailer;
