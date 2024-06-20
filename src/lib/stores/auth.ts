import { writable } from 'svelte/store';

const initialState = {
	isLoggedIn: sessionStorage.getItem('username') ? true : false,
	username: sessionStorage.getItem('username') || ''
};

export const authStore = writable(initialState);

authStore.subscribe((state) => {
	if (state.isLoggedIn) {
		sessionStorage.setItem('username', state.username);
	} else {
		sessionStorage.removeItem('username');
	}
});
