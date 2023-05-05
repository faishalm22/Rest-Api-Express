const mongoose = require('mongoose');
const { Schema } = mongoose;

const recruiterSchema = new Schema({
  account_id: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  name: {
    type: String,
    required: true
  },
  company_name: {
    type: String,
    required: true
  },
  phone_number: {
    type: String,
    required: true
  },
  subject: {
    type: String,
    required: true
  },
  company_address: {
    type: String,
    required: true
  }
});

const Recruiter = mongoose.model('Recruiter', recruiterSchema);

module.exports = Recruiter;
