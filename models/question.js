const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  options: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Option',
    },
  ],
});

const Question = mongoose.model('Question', questionSchema);

module.exports = Question;
