const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');

// CREATE user
router.post('/users', usersController.createUser);

// READ all users
router.get('/users', usersController.getAllUsers);

// READ user by ID
router.get('/users/:id', usersController.getUserById);

// UPDATE user by ID
router.put('/users/:id', usersController.updateUser);

// DELETE user by ID
router.delete('/users/:id', usersController.deleteUser);

module.exports = router;
