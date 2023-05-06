const emailConfig = async (userEmail, verificationLink) => {
  const body = process.env.EMAIL_BODY;
  return {
    api_key: process.env.API_ACCESS_TOKEN,
    from_name: process.env.FROM_NAME,
    from_email: process.env.FROM_EMAIL,
    reply_to: userEmail,
    subject: process.env.EMAIL_SUBJECT,
    html_text: `${body} \n ${verificationLink}`,
    emails: userEmail,
  };
};
module.exports = emailConfig;
