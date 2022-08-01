const mongoose = require("mongoose");
const todoSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  content: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("todo", todoSchema);