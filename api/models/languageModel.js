const mongoose = require("mongoose");
// Declare schema and assign Schema class
const Schema = mongoose.Schema;

// Create Schema Instance and add schema propertise
const languageSchema = new Schema({
    name: {
      type: String,
      required: true,
    },
    paradigms: [String],
  });

const Language = mongoose.model("Language", languageSchema);

module.exports = Language;