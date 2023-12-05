import { Schema, model } from 'mongoose';

const schema = new Schema(
	{
		title: {
			type: String,
			required: true,
			trim: true
		},
		completed: {
			type: Boolean
		},
		date: {
			type: String
		},
		description: {
			type: String,
			trim: true
		},
		color: {
			type: String,
			trim: true
		}
	},
	{
		timestamps: true
	}
);

export default model('Todo', schema);
