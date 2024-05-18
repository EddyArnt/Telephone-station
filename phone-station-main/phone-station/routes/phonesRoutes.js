// routes/phonesRoutes.js
const express = require('express');
const router = express.Router();
const phonesController = require('../controllers/phonesController');

// CREATE phone
router.post('/phones', phonesController.createPhone);

// READ all phones
router.get('/phones', phonesController.getAllPhones);

// READ phone by ID
router.get('/phones/:id', phonesController.getPhoneById);

// UPDATE phone by ID
router.put('/phones/:id', phonesController.updatePhone);

// DELETE phone by ID
router.delete('/phones/:id', phonesController.deletePhone);

module.exports = router;
