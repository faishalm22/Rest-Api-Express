const mongoose = require('mongoose');
const { Schema } = mongoose;

const courseSchema = new Schema({
  user_id: {
    type: Schema.Types.ObjectId,
    ref: 'Talent'
  },
  title: {
    type: String,
    required: true
  },
  provider: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  duration: {
    type: Number,
    required: true
  }
});

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;
