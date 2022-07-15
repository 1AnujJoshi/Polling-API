const express = require('express');
const router = express.Router();
const optionApi = require('../../../controllers/api/v1/option_api');

router.delete('/:id/delete', optionApi.destroy);
router.post('/:id/add_vote', optionApi.addVote);

module.exports = router;
