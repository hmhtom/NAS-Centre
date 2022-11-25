const { Schema } = require("mongoose");


const ticketSchema = new Schema({
  purchaseDate: {
    type: Date,
    default: Date.now,
  },
  price: {
    type: Number,
    required: true,
    min: 0.99,
  },

  seatNumber: {
    type: Number,
    required: true,
  }
}

);

module.exports = ticketSchema;
