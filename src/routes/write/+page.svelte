<script lang="ts">
	import WriteForm from '$lib/components/WriteForm.svelte';
	let formElement: HTMLFormElement | null = null;
</script>

<WriteForm bind:formElement />
