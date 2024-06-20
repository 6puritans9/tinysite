<script lang="ts">
	import Signin from '$lib/components/Signin.svelte';
	let formElement: HTMLFormElement | null = null;
	export let data;

	// console.log(data);
</script>

<Signin bind:formElement />
