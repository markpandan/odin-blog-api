const express = require("express");
const router = express.Router();

const controller = require("../controllers/PostsController");

router.get("/", controller.getPosts);

router.get("/:postId", controller.getPostById);

router.get("/:postId/comments", controller.getCommentsByPostId);

module.exports = router;
