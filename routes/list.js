const express = require("express");
const router = express.Router();
const listController = require("../controllers/list");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

router.get("/", ensureAuth, listController.getList);

router.post("/createList", listController.createList);

router.delete("/deleteList", listController.deleteList);

module.exports = router;
