const { Schema } = require("mongoose");
const format = require("date-format");


const ticketSchema = new Schema({
  purchaseDate: {
    type: Date,
    default: Date.now(),
    get: (date) => format.asString("yyyy/MM/dd hh:mm:ss", date)
  },
  price: {
    type: Number,
    required: true,
    min: 0.99
  },

  seatNumber: {
    type: String,
    required: true,
  }
}

);

module.exports = ticketSchema;
