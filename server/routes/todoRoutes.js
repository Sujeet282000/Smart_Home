import express from 'express';
import {
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo,
  toggleComplete
} from '../controllers/todoController.js';
import { authenticateToken } from '../middleware/authMiddleware.js';
const router = express.Router();

router.use(authenticateToken);

router.get('/', getTodos);
router.post('/', createTodo);
router.put('/:id', updateTodo);
router.delete('/:id', deleteTodo);
router.put('/:id/toggle', toggleComplete);

export default router;
