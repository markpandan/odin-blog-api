const express = require("express");
const router = express.Router();

const controller = require("../controllers/CommentsController");

router.get("/", controller.getComments);

router.delete("/:commentId", controller.deleteComment);

module.exports = router;
