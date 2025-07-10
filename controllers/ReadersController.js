const verifyLogin = require("../lib/verifyLogin");
const issueToken = require("../lib/jwtUtils");
const db = require("../prisma/queries");

exports.loginReader = async (req, res) => {
  const { username, password } = req.body;
  const verify = await verifyLogin("authors", username, password);

  if (verify.success) {
    const token = issueToken("readers", verify.user);
    res.json({ token });
  } else {
    res.status(401).json({ message: verify.msg });
  }
};

exports.signupReader = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    await db.createNewReader(username, email, password);
    res.json({ message: "Readers account created" });
  } catch ({ message }) {
    res.status(500).json({ message });
  }
};

exports.getReader = (req, res) => {
  res.json({ message: "This is the GET response of the readers route" });
};

exports.putReader = (req, res) => {
  res.json({ message: "This is the PUT response of the readers route" });
};

exports.getCommentsByReader = (req, res) => {
  res.json({
    message: "This is the GET response of comments from the readers route",
  });
};

exports.postCommentByReader = (req, res) => {
  res.json({
    message: "This is the POST response of comments from the readers route",
  });
};

exports.postCommentByReader = (req, res) => {
  res.json({
    message: "This is the POST response of comments from the readers route",
  });
};

exports.putCommentByReader = (req, res) => {
  res.json({
    message: "This is the PUT response of comments from the readers route",
  });
};

exports.deleteCommentByReader = (req, res) => {
  res.json({
    message: "This is the DELETE response of comments from the readers route",
  });
};
