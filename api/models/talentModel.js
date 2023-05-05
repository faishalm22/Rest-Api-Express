const mongoose = require("mongoose");
// Declare schema and assign Schema class
const Schema = mongoose.Schema;

// Create Schema Instance and add schema propertise
const profileSchema = new Schema({
  user_id: {
    type: Schema.Types.ObjectId,
    ref: "Account",
  },
  name: {
    type: String,
    required: true,
  },
  programming: {
    type: [String],
    required: true,
  },
  framework: {
    type: [String],
    required: true,
  },
  database: {
    type: [String],
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  lama_bekerja: {
    type: Number,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  umur: {
    type: Number,
    required: true,
  },
});


// Create Schema Instance and add schema propertise
const accountSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  profile: profileSchema,
});

accountSchema.pre("save", async function (next) {
  if (!this.profile.user_id) {
    this.profile.user_id = this._id;
  } else if (this.profile.user_id.toString() !== this._id.toString()) {
    this.profile.user_id = this._id;
    await this.model("Account").findByIdAndUpdate(
      this._id,
      { "profile.user_id": this._id },
      { new: true }
    );
  }
  next();
});

// create and export model
const Account = mongoose.model("Account", accountSchema);

module.exports = Account;
