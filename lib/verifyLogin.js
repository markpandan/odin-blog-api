const util = require("./passwordUtils");
const db = require("../prisma/queries");

async function verifyLogin(database, username, password) {
  let user;
  if (database == "authors") {
    user = await db.getAuthorByUsername(username);
  } else if (database == "readers") {
    user = await db.getReadersByUsername(username);
  } else {
    return { success: false, msg: "Bad Request. Invalid Database" };
  }

  if (!user) {
    return { success: false, msg: "Invalid User" };
  }

  const match = await util.isPasswordCorrect(password, user.password);
  if (!match) {
    return { success: false, msg: "Incorrect Password" };
  }

  return { success: true, msg: "User Logged In", user };
}

module.exports = verifyLogin;
