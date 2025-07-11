const verifyLogin = require("../lib/verifyLogin");
const issueToken = require("../lib/jwtUtils");
const { isAuth } = require("../lib/authUtils");
const db = require("../prisma/queries");
const { AUTHOR_ACCOUNT_TYPE_STRING } = require("../lib/constants");

const passport = require("passport");

exports.loginAuthor = async (req, res) => {
  const { username, password } = req.body;
  const verify = await verifyLogin("authors", username, password);

  if (verify.success) {
    const token = issueToken(AUTHOR_ACCOUNT_TYPE_STRING, verify.user);
    res.json({ output: token });
  } else {
    res.status(401).json({ message: verify.message });
  }
};

exports.signupAuthor = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    await db.createNewAuthor(username, email, password);
    res.json({ message: "Author account created" });
  } catch ({ message }) {
    res.status(500).json({ message });
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

exports.getPostsByAuthor = [
  isAuth,
  async (req, res) => {
    if (!(req.params.authorName == req.user.username)) {
      res.status(401).json({ message: "Unauthorized Access" });
      return;
    }

    const posts = await db.getPostsById(req.user.id);

    res.json({ output: posts });
  },
];

exports.postPostByAuthor = [
  isAuth,
  async (req, res) => {
    if (!(req.params.authorName == req.user.username)) {
      res.status(401).json({ message: "Unauthorized Access" });
      return;
    }

    const { title, content, is_published } = req.body;

    try {
      await db.createNewPosts(req.user.id, title, content, is_published);
      res.json({
        message: "Post Saved",
      });
    } catch ({ message }) {
      console.error(message);
      res.status(500).json({ message });
    }
  },
];

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
