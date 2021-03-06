const express = require('express');
const router = express.Router();
const { userSignupValidator } = require('../Validator/index');
const { signup, signin, signout, requireSignin } = require('../Controller/AuthController');

router.post('/signup', userSignupValidator, signup);
router.post('/signin', signin);
router.get('/signout', signout);

module.exports = router;