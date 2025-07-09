exports.loginAuthor = (req, res) => {
  res.json({ message: "This is the response for logging in the author" });
};

exports.signupAuthor = (req, res) => {
  res.json({ message: "This is the response for signing up the author" });
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
