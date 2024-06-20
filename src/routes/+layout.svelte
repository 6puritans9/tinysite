<script>
	import Anchor from '$lib/components/Anchor.svelte';
	// import Button from '$lib/components/Button.svelte';
	// import { onMount } from 'svelte';
	// let isSignedIn = false;

	// onMount(() => {
	// 	if (typeof window !== 'undefined' && sessionStorage.getItem('username')) {
	// 		isSignedIn = true;
	// 	}
	// });
</script>

<nav class="mx-auto">
	<ul class="flex items-center space-x-4">
		<li><Anchor href="/">Home</Anchor></li>
		<li><Anchor href="/write">Write</Anchor></li>
		<li>
			<Anchor href="/signin">Sign In</Anchor>
		</li>
	</ul>
</nav>
<slot />

<style>
	nav {
		padding-left: 0.7em;
		padding-top: 0.5em;
	}
</style>
