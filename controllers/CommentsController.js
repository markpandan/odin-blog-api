exports.getComments = (req, res) => {
  res.json({ message: "This is the GET response of the comment route" });
};

exports.deleteComment = (req, res) => {
  res.json({ message: "This is the DELETE response of the comment route" });
};
