const express = require("express");
const router = express.Router();

const controller = require("../controllers/AuthorsController");

router.get("/", controller.getAuthors);

router.post("/", controller.postAuthor);

router.post("/login", controller.loginAuthor);

router.post("/signup", controller.signupAuthor);

router.get("/token", controller.tokenAuthor);

router.get("/:authorId", controller.getAuthor);

router.put("/:authorId", controller.putAuthor);

router.get("/:authorName/posts/:postId", controller.getOnePostByAuthor);

router.post("/:authorName/posts/new", controller.postPostByAuthor);

router.put("/:authorName/posts/:postId", controller.putPostByAuthor);

router.get("/@:authorName/posts", controller.getPostsByAuthor);

router.post("/@:authorName/posts", controller.postPostByAuthor);

router.delete("/:authorId/posts/:postId", controller.deletePostByAuthor);

module.exports = router;
