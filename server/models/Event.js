const mongoose = require('mongoose');
const ticketSchema = require('./Ticket');

const { Schema } = mongoose;
const ticketSchema = require ('./Ticket')

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

      quantity: {
        type: Number,
        min: 0,
        default: 0
      },

      date: {
        type: Date,
        required: true
      },
      tickets : [ticketSchema]

});
const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
