const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/swissnote");

const Note = mongoose.model("Note", {
  value: Number,
  qr: String,
  ai: String,
  created: Date
});

module.exports = Note;
