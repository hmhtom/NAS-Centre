const mongoose = require('mongoose');
const ticketSchema = require('./Ticket');
const format = require("date-format");

const { Schema } = mongoose;


const eventSchema = new Schema({

    eventName: {
        type: String,
        required: true,
        trim: true
      },
      description: {
        type: String,
        required: true,
        minlength: 1
      },
      image: {
        type: String
      },

      date: {
        type: Date,
        required: true,
        get: (date) => format.asString("yyyy/MM/dd hh:mm:ss", date)
      },
      tickets : [ticketSchema]

});
const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
