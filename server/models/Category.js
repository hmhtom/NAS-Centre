const mongoose = require('mongoose');

const { Schema } = mongoose;
const Event = require('./Event');

const categorySchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  events: [Event.schema]
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;
