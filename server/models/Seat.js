const mongoose = require("mongoose");

const { Schema } = mongoose;

const seatSchema = new Schema({
  seatNumber: {
    type: String,
    required: true,
  },
});
module.exports = seatSchema;
