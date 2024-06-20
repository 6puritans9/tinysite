<script lang="ts">
	import { goto } from '$app/navigation';

	function logout() {
		// Clear session storage
		sessionStorage.removeItem('username');

		// Optionally, clear all session storage data
		// sessionStorage.clear();

		alert('See you again 😉!');

		// Redirect to login page
		goto('/signin');
	}
</script>

<button on:click={logout} class="bg-red-500 text-white px-20 py-2 rounded"> Sign out </button>

<style>
	button {
		margin-left: 0.7em;
	}
</style>
