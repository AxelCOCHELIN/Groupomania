const express = require("express");
const router = express.Router();
const articlesControllers = require("../controllers/article");
const auth = require("../middleware/auth");
const multer = require("../middleware/multer-config");

router.get("/", auth, articlesControllers.getAllArticles);
router.get("/:id", auth, articlesControllers.getOneArticle);
router.post("/", auth, multer, articlesControllers.createArticle);
router.put("/:id", auth, multer, articlesControllers.modifyArticle);
router.delete("/:id", auth, articlesControllers.deleteArticle);

module.exports = router;
