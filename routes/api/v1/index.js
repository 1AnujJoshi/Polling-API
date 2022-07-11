const express = require('express');

const router = express.Router();
router.get('/', (req, res) => {
  return res.status(200).json({
    message: `
    - /question  (To view all the questions)
    - /question/create (To create a question)
    - /question/:id/option/create (To add options to a specific question)
    - /question/:id/delete (To delete a question)
    - /option/:id/delete (To delete an option)
    - /option/:id/add_vote (To increment the count of votes)
    - /question/:id (To view a question and it’s options)`,
  });
});
router.use('/question', require('./question'));
router.use('/option', require('./option'));

module.exports = router;
