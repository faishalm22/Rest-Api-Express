const mongoose = require('mongoose');
const { Schema } = mongoose;

const bizdevSchema = new Schema({
  account_id: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  name: {
    type: String,
    required: true
  },
  phone_number: {
    type: String,
    required: true
  }
});

const Bizdev = mongoose.model('Bizdev', bizdevSchema);

module.exports = Bizdev;
