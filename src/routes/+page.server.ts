import { connectDB } from '$lib/server/db';

export const load = async () => {
	try {
		const connection = await connectDB();
		const results = await connection.query('SELECT * FROM test');
		connection.end();

		return {
			status: 200,
			body: results[0]
		};
	} catch (err) {
		console.error(err);
		return {
			status: 500,
			body: { error: 'DB query failed' }
		};
	}
};
