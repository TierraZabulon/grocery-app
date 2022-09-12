const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth");
const homeController = require("../controllers/home");
//router request to contoller
router.get("/", homeController.getIndex); //landing page
const { ensureAuth, ensureGuest } = require("../middleware/auth");

router.get("/login", authController.getLogin);
router.post("/login", authController.postLogin);
router.get("/logout", authController.logout);
router.get("/signup", authController.getSignup);
router.post("/signup", authController.postSignup);

// export code to be used in other files
module.exports = router;
