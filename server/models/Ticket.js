const mongoose = require('mongoose');

const { Schema } = mongoose;
const format = require("date-format");
const seatSchema = require("./Seat");

const ticketSchema = new Schema({
  purchaseDate: {
    type: Date,
    default: Date.now(),
    get: (date) => format.asString("yyyy/MM/dd hh:mm:ss", date),
  },

  //   seatId
  seatInfo: seatSchema,


  // eventId
  event: 
    {
      type: Schema.Types.ObjectID,
      ref: 'Event',
    },
  
});
const Ticket= mongoose.model('Ticket', ticketSchema);

module.exports = Ticket;
