import { connectDB } from '$lib/server/db';

export const load = async () => {
	try {
		const connection = await connectDB();
		const results = await connection.query(
			'SELECT * FROM posts JOIN users on posts.user_id = users.id;'
		);
		connection.end();

		return {
			status: 200,
			body: results[0]
		};
	} catch (err: any) {
		console.error(err);
		return {
			status: 500,
			body: { error: 'DB query failed' }
		};
	}
};
