const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
// const passport = require('../services/passport/passport');
const passport = require('passport')

//////////////////////////////////////////////////////////GETTING FORM FOR LOGIN
router.get('/', userController.getLoginPage);

//////////////////////////////////////////////////////////POSTING LOGIN FORM TO LOG IN USER
router.post('/', passport.authenticate('local', {
    failureRedirect: '/register'
}), userController.postLogin);

module.exports = router;