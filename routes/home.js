const express = require("express");
const router = express.Router();
const homeController = require("../controllers/home");
//router request to contoller
router.get("/", homeController.getIndex);
// export code to be used in other files
module.exports = router;
