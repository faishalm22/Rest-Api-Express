const mongoose = require("mongoose");
// Declare schema and assign Schema class
const Schema = mongoose.Schema;

// Create Schema Instance and add schema propertise
const bobotSchema = new Schema({
    selisih: {
        type: number,
        required: true,
    },
    bobot_nilai: {
        type: number,
        required: true,
    },
  });

const Bobot = mongoose.model("Bobot", bobotSchema);

module.exports = Bobot;