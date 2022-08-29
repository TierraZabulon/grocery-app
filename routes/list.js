const express = require("express");
const router = express.Router();
const listController = require("../controllers/list");
// const { ensureAuth, ensureGuest } = require('../middleware/auth')

// router.get('/', ensureAuth, todosController.getTodos)

router.post("/createlist", listController.createlist);

router.put("/markComplete", listController.markComplete);

router.put("/markIncomplete", listController.markIncomplete);

router.delete("/deletelist", listController.deletelist);

module.exports = router;
