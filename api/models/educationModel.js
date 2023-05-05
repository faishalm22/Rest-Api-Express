const mongoose = require('mongoose');
const { Schema } = mongoose;

const educationSchema = new Schema({
  user_id: {
    type: Schema.Types.ObjectId,
    ref: 'Talent'
  },
  school: {
    type: String,
    required: true
  },
  degree: {
    type: String,
    required: true
  },
  subject: {
    type: Date,
    required: true
  }
});

const Education = mongoose.model('Education', educationSchema);

module.exports = Education;
