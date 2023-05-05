const mongoose = require("mongoose");
// Declare schema and assign Schema class
const Schema = mongoose.Schema;

// Create Schema Instance and add schema propertise
const paradigmSchema = new Schema({
    // programming_language_id: {
    //   type: Schema.Types.ObjectId,
    //   ref: 'ProgrammingLanguage'
    // },
    name: {
      type: String,
      required: true,
    },
    parent_id: {
      type: Schema.Types.ObjectId,
      ref: 'Paradigm'
    }
  });

const Paradigm = mongoose.model("Paradigm", paradigmSchema);

module.exports = Paradigm;