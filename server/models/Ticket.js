const { Schema, model } = require("mongoose");
const format = require("date-format");
const seatSchema = require("./Seat");

const ticketSchema = new Schema({
  purchaseDate: {
    type: Date,
    default: Date.now(),
    get: (date) => format.asString("yyyy/MM/dd hh:mm:ss", date),
  },

  //   seatId
  seatInfo: [seatSchema],


  // eventId
  eventId: [
    {
      type: Schema.Types.ObjectID,
      ref: 'Event',
    },
  ],
});
const Ticket= model('Ticket', ticketSchema);

module.exports = Ticket;
