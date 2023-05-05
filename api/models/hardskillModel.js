const mongoose = require('mongoose');
const { Schema } = mongoose;

const hardskillSchema = new Schema({
  user_id: {
    type: Schema.Types.ObjectId,
    ref: 'Talent'
  },
  framework: {
    type: [String],
    required: true
  },
  application_server: {
    type: [String],
    required: true
  },
  database: {
    type: [String],
    required: true
  },
  operating_system: {
    type: [String],
    required: true
  },
  development_tools: {
    type: [String],
    required: true
  },
  programming_language: [{
    type: Schema.Types.ObjectId,
    ref: 'ProgrammingLanguage'
  }]
});

const Hardskill = mongoose.model('Hardskill', hardskillSchema);

module.exports = Hardskill;
