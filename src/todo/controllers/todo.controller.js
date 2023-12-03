import Todo from '../models/todo.model.js';

export const saveTodo = async (req, res) => {
	try {
		const { title } = req.body;

		const newTodo = new Todo({ title });

		const savedTodo = await newTodo.save();

		res.status(200).json(savedTodo);
	} catch (error) {
		res.status(500).json({ error: true, message: error.message });
	}
};

export const getTodos = async (req, res) => {
	try {
		const todos = await Todo.find().sort({ createdAt: -1 }).exec();

		res.status(200).json(todos);
	} catch (error) {
		res.status(500).json({ error: true, message: error.message });
	}
};

export const updateTodos = async (req, res) => {
	try {
		const { _id, completed, description, title, date } = req.body;

		const newTodo = {};

		if (completed !== undefined) newTodo.completed = completed;
		if (description) newTodo.description = description;
		if (title) newTodo.title = title;
		if (date) newTodo.date = date;

		const result = await Todo.findOneAndUpdate({ _id }, newTodo).exec();

		res.status(200).json({ ...result.toJSON(), ...newTodo });
	} catch (error) {
		res.status(500).json({ error: true, message: error.message });
	}
};

export const deleteTodo = async (req, res) => {
	try {
		const { _id } = req.query;

		const { deletedCount } = await Todo.deleteOne({ _id }).exec();

		if (deletedCount === 0) throw 'No se pudo eliminar el Todo';

		res.status(200).json({ success: true });
	} catch (error) {
		res.status(500).json({ error: true, message: error.message });
	}
};

export const getTodoById = async (req, res) => {
	try {
		const { _id } = req.params;

		console.log(req);

		const todo = await Todo.findById(_id);

		res.status(200).json(todo);
	} catch (error) {
		res.status(500).json({ error: true, message: error.message });
	}
};
