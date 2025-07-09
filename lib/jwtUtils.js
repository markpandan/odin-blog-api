const jwt = require("jsonwebtoken");

function issueToken(accountType, payload) {
  payload = { accountType, ...payload };
  const signedToken = jwt.sign(payload, process.env.JWT_SECRET_KEY, {
    expiresIn: "1d",
  });

  return `Bearer ${signedToken}`;
}

module.exports = issueToken;
