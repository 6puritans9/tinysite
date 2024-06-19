<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	export let formElement: HTMLFormElement | null = null;
	const dispatch = createEventDispatcher();

	async function handleSubmit(event: Event) {
		event.preventDefault();
		const formData = new FormData(formElement);

		const response = await fetch('/write', {
			method: 'POST',
			body: formData
		});

		const result = await response.json();

		if (response.ok) {
			dispatch('success', { message: result.message });
		} else {
			dispatch('error', { error: result.error });
		}
	}
</script>

<div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
	<form bind:this={formElement} on:submit={handleSubmit} method="post">
		<div class="space-y-12">
			<div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
				<div class="col-span-full">
					<label for="content" class="block text-base font-semibold leading-6 text-gray-900"
						>Create Post</label
					>
					<div class="mt-2">
						<textarea
							name="content"
							rows="5"
							placeholder="Give me your words😜"
							class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
						></textarea>
					</div>
				</div>
			</div>

			<div class="mt-6 flex items-center justify-end gap-x-6">
				<a href="/" class="text-sm font-semibold leading-6 text-gray-900">Go Back</a>
				<button
					type="submit"
					class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
					>Submit</button
				>
			</div>
		</div>
	</form>
</div>
