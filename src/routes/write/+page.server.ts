import { connectDB } from '$lib/server/db';

export const actions = {
	default: async ({ request }) => {
		const formData = await request.formData();
		const content = formData.get('content');

		if (!content || typeof content !== 'string')
			return { status: 400, error: 'Could you please write something...?🥹' };

		try {
			const newPost = await createPost(content);

			return {
				status: 201,
				body: { post: newPost }
			};
		} catch (error: any) {
			return {
				status: 500,
				body: { error: error.message }
			};
		}
	}
};

const createPost = async (content: String) => {
	const connection = await connectDB();

	try {
		const [result] = await connection.execute('INSERT INTO posts (contents) VALUES (?)', [content]);
		connection.end();

		return {
			status: 200,
			body: result[0][0]['serverStatus']
		};
	} catch (error: any) {
		await connection.end();
		throw new Error(`Error creating post: ${error.message}`);
	}
};
