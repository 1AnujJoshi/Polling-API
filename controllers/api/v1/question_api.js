const Question = require('../../../models/question');
const Option = require('../../../models/option');

//returns all the questions available in the database
module.exports.index = async function (req, res) {
  let questions = await Question.find({}).sort('-createdAt').populate({
    path: 'options',
  });
  return res.status(200).json({
    message: 'List of questions',
    questions,
  });
};

//creates a question
module.exports.createQuestion = async (req, res) => {
  try {
    const question = await Question.create(req.body);
    return res.status(200).json({
      message: 'Your question is successfully created!!',
      question,
    });
  } catch (err) {
    console.log('********', err);
    return res.status(500).json({
      message: 'Internal Server Error',
    });
  }
};

//finds  specific question and sends it as json object
module.exports.getQuestion = async (req, res) => {
  try {
    const question = await Question.findById(req.params.id).populate({
      path: 'options',
    });
    return res.status(200).json({
      status: 'success',
      question,
    });
  } catch (err) {
    console.log('********', err);
    return res.status(500).json({
      message: 'Internal Server Error',
    });
  }
};

//creates option for the specific question
module.exports.createOption = async (req, res) => {
  try {
    const question = await Question.findById(req.params.id);
    const option = await Option.create(req.body);
    question.options.push(option);
    await question.save();
    return res.status(200).json({
      status: 'success',
      question,
      option,
    });
  } catch (err) {
    console.log('********', err);
    return res.status(500).json({
      message: 'Internal Server Error',
    });
  }
};

//deletes the question
module.exports.destroy = async (req, res) => {
  try {
    const question = await Question.findById(req.params.id).populate('options');
    await question.delete();
    return res.status(200).json({
      status: 'success',
      message: 'Question deleted successfully!!',
    });
  } catch (err) {
    console.log('********', err);
    return res.status(500).json({
      message: 'Internal Server Error',
    });
  }
};
