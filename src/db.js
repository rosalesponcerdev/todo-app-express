import { connect } from 'mongoose';

export const connectDB = async () => {
	try {
		await connect(process.env.MONGODB_URL);
		console.log('CONNECT', process.env.MONGODB_URL);
	} catch (error) {
		console.warn(error);
	}
};
