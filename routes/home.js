const express = require('express');
const router = express.Router();
const controller = require('../controller/controller');


router.get('/comingsoon', controller.fetchMembers);
router.get('/games/match', controller.match_game);
module.exports = router;