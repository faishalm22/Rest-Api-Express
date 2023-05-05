const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: { type: String, required: true },
  fullname: { type: String, required: true },
  phone_number: { type: String, required: true },
  password: { type: String, required: true },
  user_id: { type: Schema.Types.ObjectId, refPath: 'role' },
  role: { type: String, enum: ['talent', 'bizdev','recruiter'] }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
