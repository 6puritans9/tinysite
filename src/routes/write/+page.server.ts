import { createPost } from '$lib/server/db';

export const actions = {
	default: async ({ request }) => {
		const post = await request.formData();

		const res = await createPost({
			title: post.get('title'),
			body: post.get('body'),
			userId: 1
		});

		return res;
	}
};
