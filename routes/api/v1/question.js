const express = require('express');
const router = express.Router();
const questionApi = require('../../../controllers/api/v1/question_api');

// // To get all the question
router.get('/', questionApi.index);
// To create a question
router.post('/create', questionApi.createQuestion);
// To add options to a specific question
router.post('/:id/option/create', questionApi.createOption);
// To delete a question
router.delete('/:id/delete', questionApi.destroy);
// To view a question and it’s options
router.get('/:id', questionApi.getQuestion);

module.exports = router;
