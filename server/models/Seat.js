const mongoose = require("mongoose");

const { Schema } = mongoose;

const seatSchema = new Schema({
  seatNumber: {
    type: String,
    required: true,
    unique: true,
  },
});

const Seat = mongoose.model("Seat", seatSchema);

module.exports = Seat;
