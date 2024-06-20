import { getUserByName } from '$lib/server/db';

export const actions = {
	default: async ({ request }) => {
		const formData = await request.formData();
		const name = formData.get('name') as string;
		const password = formData.get('password') as string;
		// console.log(formData);

		if (!name || !password)
			return {
				status: 400,
				body: { error: 'Name and password are required' }
			};

		try {
			const user = await getUserByName(name);
			if (!user)
				return {
					status: 401,
					body: { error: 'Invalid username or password' }
				};

			if (password !== user.password)
				return {
					status: 401,
					body: { error: 'Invalid username or password' }
				};

			return {
				status: 200,
				body: { message: 'Auth successful', userId: user.id, username: user.name }
			};
		} catch (error) {
			return {
				status: 500,
				body: { error: error.message }
			};
		}
	}
};
