const passport = require("passport");

exports.getPosts = [
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.json({
      user: req.user,
      message: "This is the GET response of the post route",
    });
  },
];

exports.getPostById = (req, res) => {};

exports.getCommentsByPostId = (req, res) => {};
