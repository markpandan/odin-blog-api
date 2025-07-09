const express = require("express");
const router = express.Router();

const controller = require("../controllers/ReadersController");

router.get("/:readerId", controller.getReader);

router.put("/:readerId", controller.putReader);

router.get("/:readerId/comments", controller.getCommentsByReader);

router.post("/:readerId/comments", controller.postCommentByReader);

router.put("/:readerId/comments/:commentId", controller.putCommentByReader);

router.delete(
  "/:readerId/comments/:commentId",
  controller.deleteCommentByReader
);

module.exports = router;
