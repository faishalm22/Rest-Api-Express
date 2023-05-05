const mongoose = require('mongoose');
const { Schema } = mongoose;

const cartSchema = new Schema({
  recruiter_id: {
    type: Schema.Types.ObjectId,
    ref: 'Recruiter'
  },
  talents: [{
    type: Schema.Types.ObjectId,
    ref: 'Talent'
  }]
});

const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;
