const express = require("express");
const router = express.Router();

const controller = require("../controllers/ReadersController");

router.post("/login", controller.loginReader);

router.post("/signup", controller.signupReader);

router.get("/token", controller.tokenReader);

// router.get("/:readerId", controller.getReader);
router.get("/", controller.getReader);

router.put("/:readerId", controller.putReader);

router.get("/:readerId/comments", controller.getCommentsByReader);

router.post(
  "/@:readerName/posts/:postId/comments",
  controller.postCommentByReader
);

router.put("/:readerId/comments/:commentId", controller.putCommentByReader);

router.delete(
  "/:readerId/comments/:commentId",
  controller.deleteCommentByReader
);

module.exports = router;
