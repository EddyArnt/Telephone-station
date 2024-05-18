const express = require('express');
const router = express.Router();
const callsController = require('../controllers/callsController');

// CREATE call
router.post('/calls', callsController.createCall);

// READ all calls
router.get('/calls', callsController.getAllCalls);

// READ call by ID
router.get('/calls/:id', callsController.getCallById);

// UPDATE call by ID
router.put('/calls/:id', callsController.updateCall);

// DELETE call by ID
router.delete('/calls/:id', callsController.deleteCall);

module.exports = router;