import { writable } from 'svelte/store';
import type { User } from './user';

export const user = writable<User>({
	name: '',
	id: 0
});
