const util = require("./passwordUtils");
const db = require("../prisma/queries");
const {
  AUTHOR_ACCOUNT_TYPE_STRING,
  READER_ACCOUNT_TYPE_STRING,
} = require("../lib/constants");

async function verifyLogin(database, username, password) {
  let user;
  if (database == AUTHOR_ACCOUNT_TYPE_STRING) {
    user = await db.getAuthorByUsername(username);
  } else if (database == READER_ACCOUNT_TYPE_STRING) {
    user = await db.getReadersByUsername(username);
  } else {
    return { success: false, message: "Bad Request. Invalid Database" };
  }

  if (!user) {
    return { success: false, message: "Invalid User" };
  }

  const match = await util.isPasswordCorrect(password, user.password);
  if (!match) {
    return { success: false, message: "Incorrect Password" };
  }

  return { success: true, message: "User Logged In", output: user };
}

module.exports = verifyLogin;
