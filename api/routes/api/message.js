const express = require('express');
const router = express.Router();
const passport = require('passport');
const controller = require('../../controllers/messages.controller');

router.get('/', passport.authenticate('jwt', { session: false }), controller.messages);
router.post('/', passport.authenticate('jwt', { session: false }), controller.new);

module.exports = router;