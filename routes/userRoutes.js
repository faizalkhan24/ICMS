const express = require('express');
const UserController = require('../controllers/userController');
const authenticateJWT = require('../middleware/authMiddleware');
const router = express.Router();

// Authenticated routes
router.get('/profile', authenticateJWT, UserController.getUserProfile);
router.put('/profile', authenticateJWT, UserController.updateUserProfile);

// Admin routes
router.get('/', authenticateJWT, UserController.getAllUsers);
router.get('/:id', authenticateJWT, UserController.getUserById);
router.put('/:id', authenticateJWT, UserController.updateUser);
router.delete('/:id', authenticateJWT, UserController.deleteUser);

module.exports = router;
