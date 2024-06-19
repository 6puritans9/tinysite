<script lang="ts">
	import WriteForm from '$lib/components/WriteForm.svelte';
	let formElement: HTMLFormElement | null = null;

	// let name = '';
	// let password = '';
	// let error = '';
	// let message = '';

	// async function handleSubmit(event: Event) {
	// 	event.preventDefault();

	// 	const formData = new FormData();
	// 	formData.append('name', name);
	// 	formData.append('password', password);

	// 	const response = await fetch('/signin', {
	// 		method: 'POST',
	// 		body: formData
	// 	});

	// 	const result = await response.json();
	// 	console.log(result);

	// 	if (response.ok) {
	// 		message = result.message;
	// 		error = '';
	// 	} else {
	// 		error = result.error;
	// 		message = '';
	// 	}
	// }
</script>

<WriteForm bind:formElement />
