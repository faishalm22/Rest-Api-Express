
// Create Schema Instance and add schema propertise
const mongoose = require('mongoose');
const Hardskill = require('./hardskillModel');
const { Schema } = mongoose;

const talentSchema = new Schema({
  account_id: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  name: {
    type: String,
    default: ''
  },
  date_of_birth: {
    type: Date,
    default: null
  },
  religion: {
    type: String,
    default: ''
  },
  place_of_birth: {
    type: String,
    default: ''
  },
  gender: {
    type: String,
    default: ''
  },
  health: {
    type: String,
    default: ''
  },
  language: {
    type: [String],
    default: ''
  },
  company: {
    type: String,
    default: ''
  },
  status: {
    type: String,
    default: ''
  },
  courses: [{
    type: Schema.Types.ObjectId,
    ref: 'Course'
  }],
  projectexp: [{
    type: Schema.Types.ObjectId,
    ref: 'ProjectExp'
  }],
  education: [{
    type: Schema.Types.ObjectId,
    ref: 'Education'
  }],
  hardskill: [{
    type: Schema.Types.ObjectId,
    ref: 'Hardskill'
  }]
});

const Talent = mongoose.model('Talent', talentSchema);

module.exports = Talent;

