const passport = require("passport");
const db = require("../prisma/queries");

exports.getPosts = async (req, res) => {
  const posts = await db.getPosts();

  res.json({ output: posts });
};

exports.getPostById = async (req, res) => {
  const post = await db.getPostsByPostId(req.params.postId);

  res.json({ output: post[0] });
};

exports.getCommentsByPostId = async (req, res) => {
  const comments = await db.getCommentsById(req.params.postId);

  res.json({ output: comments });
};
