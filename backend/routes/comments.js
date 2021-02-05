const express = require("express");
const router = express.Router();
const commentsControllers = require("../controllers/comment");
const auth = require("../middleware/auth");
const multer = require("../middleware/multer-config");

router.get("/", auth, commentsControllers.getAllComments);
router.get("/:id", auth, commentsControllers.getOneComment);
router.post("/", auth, multer, commentsControllers.createComment);
router.put("/:id", auth, multer, commentsControllers.modifyComment);
router.delete("/:id", auth, commentsControllers.deleteComment);

module.exports = router;
