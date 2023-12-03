import { Router } from 'express';
import {
	deleteTodo,
	getTodoById,
	getTodos,
	saveTodo,
	updateTodos
} from './controllers/todo.controller.js';

const router = Router();

router.get('/', (req, res) => {
	res.status(200).json({ ok: true });
});

router.post('/todos', saveTodo);
router.get('/todos', getTodos);
router.get('/todos/:_id', getTodoById);
router.put('/todos', updateTodos);
router.delete('/todos', deleteTodo);

export default router;
