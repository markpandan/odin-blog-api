const verifyLogin = require("../lib/verifyLogin");
const issueToken = require("../lib/jwtUtils");
const db = require("../prisma/queries");

exports.loginAuthor = async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const verify = await verifyLogin("authors", username, password);

  if (verify.success) {
    const token = issueToken("author", verify.user);
    res.json({ token });
  } else {
    res.status(401).json({ message: verify.msg });
  }
};

exports.signupAuthor = async (req, res) => {
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;

  console.log(username, email, password);

  try {
    await db.createNewAuthor(username, email, password);

    res.json({ message: "Author account created" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAuthors = (req, res) => {
  res.json({ message: "This is the GET response of getting all authors" });
};

exports.getAuthor = (req, res) => {
  res.json({ message: "This is the GET response of the author route" });
};

exports.postAuthor = (req, res) => {
  res.json({ message: "This is the POST response of the author route" });
};

exports.putAuthor = (req, res) => {
  res.json({ message: "This is the PUT response of the author route" });
};

exports.getPostsByAuthor = (req, res) => {
  res.json({
    message: "This is the GET response from a post of the author route",
  });
};

exports.postPostByAuthor = (req, res) => {
  res.json({
    message: "This is the POST response from a post of the author route",
  });
};

exports.putPostByAuthor = (req, res) => {
  res.json({
    message: "This is the PUT response from a post of the author route",
  });
};

exports.deletePostByAuthor = (req, res) => {
  res.json({
    message: "This is the PUT response from a post of the author route",
  });
};
