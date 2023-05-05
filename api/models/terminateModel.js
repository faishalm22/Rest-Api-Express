const mongoose = require('mongoose');
const { Schema } = mongoose;

const terminateContractSchema = new Schema({
  recruitment_id: {
    type: Schema.Types.ObjectId,
    ref: 'Recruitment',
    required: true
  },
  talent_id: {
    type: Schema.Types.ObjectId,
    ref: 'Talent',
    required: true
  },
  recruiter_id: {
    type: Schema.Types.ObjectId,
    ref: 'Recruiter',
    required: true
  },
  terminate: {
    type: Date,
    required: true
  },
  reason: {
    type: String,
    required: true
  }
});

const TerminateContract = mongoose.model('TerminateContract', terminateContractSchema);

module.exports = TerminateContract;
