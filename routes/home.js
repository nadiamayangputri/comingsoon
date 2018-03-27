const express = require('express');
const router = express.Router();
const controller = require('../controller/controller');

router.get('/', controller.comingSoon);
router.get('/members', controller.fetchMembers);

module.exports = router;