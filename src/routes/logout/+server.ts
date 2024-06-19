import { redirect } from '@sveltejs/kit';

export const POST = () => {
	console.log('Logging out...');

	throw redirect(303, '/login');
};
