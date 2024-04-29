import express from 'express';
import UsersController from '../controllers/UsersController.js';

const router = express.Router();  

router.route('/data/game')
  .get(UsersController.getStats)
  .post(UsersController.create)

router.get('/data/game/:id', UsersController.showUser)
router.get('/data/users/', UsersController.index)

export default router;