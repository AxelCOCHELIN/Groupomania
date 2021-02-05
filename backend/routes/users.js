const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const multer = require("../middleware/multer-config");
const usersController = require("../controllers/user");

router.post("/signup", multer, usersController.signup);
router.post("/login", usersController.login);
router.get("/users", auth, usersController.getAllUsers);
router.get("/user/:id", auth, usersController.getOneUser);
router.put("/user/:id", auth, multer, usersController.modifyUser);
router.delete("/user/:id", auth, usersController.deleteUser);

module.exports = router;
