const HOST = process.env.HOST;
exports.verificationLinkGenerator = async (verifyToken) => {
  return `${HOST}/api/v1/verifyMe/${verifyToken}`;
};
