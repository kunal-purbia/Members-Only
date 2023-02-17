const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

//////////////////////////////////////////////////////////GETTING FORM FOR USER REGISTER
router.get('/', userController.getRegisterPage);

//////////////////////////////////////////////////////////POSTING DATA OF USER TO REGISTER
router.post('/', userController.postRegister)

module.exports = router;