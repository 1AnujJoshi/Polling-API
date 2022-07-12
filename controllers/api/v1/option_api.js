const Question = require('../../../models/question');
const Option = require('../../../models/option');

//deletes the option of the specific question
module.exports.destroy = async (req, res) => {
  try {
    const option = await Option.findById(req.params.id);
    await option.delete();
    return res.status(200).json({
      message: 'Option deleted successfully!!',
      option,
    });
  } catch (err) {
    console.log('********', err);
    return res.status(500).json({
      message: 'Internal Server Error',
    });
  }
};

//adds votes through the link_to_vote url
module.exports.addVote = async (req, res) => {
  try {
    const option = await Option.findById(req.params.id);
    if (!option.votes) {
      option.votes = 0;
    }
    option.votes += 1;
    await option.save();
    return res.status(200).json({
      message: 'Vote added successfully!!',
    });
  } catch (err) {
    console.log('********', err);
    return res.status(500).json({
      message: 'Internal Server Error',
    });
  }
};
