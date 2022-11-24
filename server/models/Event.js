const mongoose = require('mongoose');

const { Schema } = mongoose;
const Ticket = require ('./Ticket')

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
      tickets : [Ticket.schema]

});
const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
