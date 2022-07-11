const mongoose = require('mongoose');

const optionSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  votes: {
    type: Number,
  },
  link_to_vote: {
    type: String,
  },
});
optionSchema.pre('save', function (next) {
  this.link_to_vote = `https://api-polling.herokuapp.com/api/v1/option/${this._id}/add_vote`;
  return next();
});

const Option = mongoose.model('Option', optionSchema);
module.exports = Option;
