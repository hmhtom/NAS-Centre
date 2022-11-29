const mongoose = require("mongoose");

const { Schema } = mongoose;
const format = require("date-format");

const ticketSchema = new Schema({
  purchaseDate: {
    type: Date,
    default: Date.now(),
    get: (date) => format.asString("yyyy/MM/dd hh:mm:ss", date),
  },

  //   seatId
  seatNumber: {
    type: String,
  },

  // eventId
  event: {
    type: Schema.Types.ObjectID,
    ref: "Event",
  },
});
const Ticket = mongoose.model("Ticket", ticketSchema);

module.exports = Ticket;
