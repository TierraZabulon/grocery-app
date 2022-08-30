const mongoose = require("mongoose");

const listSchema = new mongoose.Schema({
  list: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("List", listSchema);
