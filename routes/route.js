import express from 'express';
import UsersController from '../controllers/UsersController.js';

const router = express.Router();  

router.get('/api/users', UsersController.index)
router.get('/api/users/:id', UsersController.show)

export default router;