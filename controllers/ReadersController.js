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
