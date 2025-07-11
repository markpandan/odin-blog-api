const verifyLogin = require("../lib/verifyLogin");
const issueToken = require("../lib/jwtUtils");
const db = require("../prisma/queries");
const { isAuth, verifyAccount } = require("../lib/authUtils");
const { READER_ACCOUNT_TYPE_STRING } = require("../lib/constants");

exports.loginReader = async (req, res) => {
  const { username, password } = req.body;
  const verify = await verifyLogin(
    READER_ACCOUNT_TYPE_STRING,
    username,
    password
  );

  if (verify.success) {
    const token = issueToken(READER_ACCOUNT_TYPE_STRING, verify.user);
    res.json({ output: token });
  } else {
    res.status(401).json({ message: verify.message });
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

exports.postCommentByReader = [
  isAuth,
  async (req, res) => {
    const postId = req.query.postId;
    const comment = req.body.comment;

    const verify = verifyAccount(
      READER_ACCOUNT_TYPE_STRING,
      req.user,
      req.params.readerName
    );

    if (!verify.success) {
      res.status(401).json({ message: verify.message });
      return;
    }

    try {
      await db.createNewComment(req.user.id, postId, comment);
    } catch ({ message }) {
      res.status(500).json({ message });
    }

    res.json({
      message: "comment sent",
    });
  },
];

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
