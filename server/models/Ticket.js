const mongoose = require('mongoose');

const { Schema } = mongoose;

const ticketSchema = new  Schema({
    purchaseDate:{
        type : Date,
        default : Date.now
    },
    price: {
        type: Number,
        required: true,
        min: 0.99
      },

      seatNumber : {
        type : Number,
        required : true

      },

    user : {
        type : Schema.Types.ObjectId,
        ref : 'User',
        required : true
    }
});
const Ticket = mongoose.model('Ticket', productSchema);

module.exports = Ticket;