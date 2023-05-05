const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recruitmentSchema = new Schema({
  start_date: { type: Date },
  end_date: { type: Date },
  status: { type: String, enum: ['pending', 'approved', 'rejected'] },
  talent_id: [{ type: Schema.Types.ObjectId, ref: 'Talent' }],
  recruiter_id: { type: Schema.Types.ObjectId, ref: 'Recruiter' }
});

const Recruitment = mongoose.model('Recruitment', recruitmentSchema);

module.exports = Recruitment;
