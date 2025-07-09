const express = require("express");
const router = express.Router();

const controller = require("../controllers/AuthorsController");

router.get("/", controller.getAuthors);

router.post("/", controller.postAuthor);

router.post("/login", controller.loginAuthor);

router.post("/signup", controller.signupAuthor);

router.get("/:authorId", controller.getAuthor);

router.put("/:authorId", controller.putAuthor);

router.get("/:authorId/posts", controller.getPostsByAuthor);

router.post("/:authorId/posts", controller.postPostByAuthor);

router.put("/:authorId/posts/:postId", controller.putPostByAuthor);

router.delete("/:authorId/posts/:postId", controller.deletePostByAuthor);

module.exports = router;
