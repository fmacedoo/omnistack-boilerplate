const express = require('express');
const router = express.Router();
const passport = require('passport');
const controller = require('../../controllers/users.controller');

router.post('/signup', controller.signup);
router.post('/token', controller.token);
router.get('/session', passport.authenticate('jwt', { session: false }), controller.session);

module.exports = router;