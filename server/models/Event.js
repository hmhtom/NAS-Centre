const mongoose = require("mongoose");
const format = require("date-format");


const { Schema } = mongoose;

const eventSchema = new Schema({
  eventName: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    minlength: 1,
  },
  image: {
    type: String,
  },

  date: {
    type: Date,
    required: true,
    get: (date) => format.asString("yyyy/MM/dd hh:mm:ss", date),
  },
  price: {
    type: Number,
    required: true,
    min: 0.99,
  },
  availableSeats: {
    type: Number,
    default: 100
  },
  ticketsSold: [
    {
      type: Schema.Types.ObjectID,
      ref: "Ticket",
    },
  ],
}, 
{
    toJSON: {
        virtuals: true
    }, 
    id: false
});

eventSchema.virtual('ticketSoldCount').get(function(){
    return this.ticketsSold.length
})

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;
