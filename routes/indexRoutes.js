const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

//////////////////////////////////////////////////////////GETTING HOMEPAGE
router.get('/', userController.getHomePage);

//////////////////////////////////////////////////////////GETTING FORM FOR MESSAGE
router.get('/create', userController.getMessageForm);

//////////////////////////////////////////////////////////POSTING MESSAGE DATA TO DATABASE
router.post('/message', userController.postMessage);

//////////////////////////////////////////////////////////GETTING FORM FOR MEMBERSHIP
router.get('/membership', userController.getMembershipForm);

//////////////////////////////////////////////////////////UPDATING MEMBERSHIP DATA OF USER
router.post('/membership', userController.updateMembership);

//////////////////////////////////////////////////////////DELETING MESSAGE FROM DATABASE
router.post('/delete/:id', userController.deleteMessage)

//////////////////////////////////////////////////////////LOGOUT ACCOUNT OF USER
router.get('/logout', userController.logoutUser)

module.exports = router;