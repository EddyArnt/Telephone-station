const express = require('express');
const router = express.Router();
const userPhonesController = require('../controllers/userPhonesController');

// CREATE user phone
router.post('/userphones', userPhonesController.createUserPhone);

// DELETE user phone by ID
router.delete('/userphones/:user_id/:phone_id', userPhonesController.deleteUserPhone);
router.post('/calculate-monthly-fee', userPhonesController.calculateMonthlyFee);

module.exports = router;