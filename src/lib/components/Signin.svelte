<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { goto } from '$app/navigation';
	import { authStore } from '$lib/stores/auth';

	export let formElement: HTMLFormElement | null = null;
	const dispatch = createEventDispatcher();

	async function handleSubmit(event: Event) {
		event.preventDefault();
		const formData = new FormData(formElement);

		const response = await fetch('/signin', {
			method: 'POST',
			body: formData
		});

		console.log(response);
		const result = await response.json();
		console.log(result);

		if (response.ok) {
			authStore.set({
				isLoggedIn: true,
				username: result.username
			});

			dispatch('success', { message: result.message });
			alert('Successfully signed in!');
			goto('/');
		} else {
			dispatch('error', { error: result.error });
		}
	}
</script>

<div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
	<form bind:this={formElement} on:submit={handleSubmit} class="space-y-6" action="#" method="POST">
		<div>
			<label for="name" class="block text-sm font-medium leading-6 text-gray-900">Name</label>
			<div class="mt-2">
				<input
					id="name"
					name="name"
					type="text"
					required
					class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
				/>
			</div>
		</div>

		<div>
			<div class="flex items-center justify-between">
				<label for="password" class="block text-sm font-medium leading-6 text-gray-900"
					>Password</label
				>
				<div class="text-sm">
					<a href="#" class="font-semibold text-indigo-600 hover:text-indigo-500">
						Forgot password?</a
					>
				</div>
			</div>
			<div class="mt-2">
				<input
					id="password"
					name="password"
					type="password"
					autocomplete="current-password"
					required
					class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
				/>
			</div>
		</div>

		<div>
			<button
				type="submit"
				class="flex w-half justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
				>Sign in</button
			>
		</div>
	</form>

	<p class="mt-10 text-center text-sm text-gray-500">
		Not a member?
		<a href="/signup" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
			>Sign up!🤗</a
		>
	</p>
</div>
