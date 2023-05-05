const mongoose = require("mongoose");
// Declare schema and assign Schema class
const Schema = mongoose.Schema;

// Create Schema Instance and add schema propertise
const programmingLanguageSchema = new Schema({
    hardskill_id: {
      type: Schema.Types.ObjectId,
      ref: 'Hardskill'
    },
    name: {
      type: String,
      required: true,
    },
    paradigm: [{
      type: Schema.Types.ObjectId,
      ref: 'Paradigm'
    }]
  });

const ProgrammingLanguage = mongoose.model("ProgrammingLanguage", programmingLanguageSchema);

module.exports = ProgrammingLanguage;