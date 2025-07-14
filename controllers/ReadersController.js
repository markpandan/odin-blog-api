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
    const token = issueToken(READER_ACCOUNT_TYPE_STRING, verify.output);
    res.json({ output: { token } });
  } else {
    res.status(401).json({ message: verify.message });
  }
};

exports.signupReader = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    await db.createNewReader(username, email, password);
    res.json({ message: "Reader account created" });
  } catch (error) {
    console.error(error);
    if (
      error.name == "PrismaClientKnownRequestError" &&
      error.code == "P2002"
    ) {
      res.status(401).json({ message: "Username or email already exists" });
    } else {
      res.status(500).json({ message: error.message });
    }
  }
};

exports.tokenReader = [
  isAuth,
  async (req, res) => {
    const user = await db.getReadersByUsername(req.user.username);
    res.json({ output: user });
  },
];

exports.getReader = [
  isAuth,
  (req, res) => {
    res.json({ output: req.user });
  },
];

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
    const { readerName, postId } = req.params;
    const comment = req.body.comment;

    const verify = verifyAccount(
      READER_ACCOUNT_TYPE_STRING,
      req.user,
      readerName
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
      message: "Comment Sent",
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
