<script>
	export let data;
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<ul>
	{#each data.body as person}
		<li>
			<p>{person.name}</p>
		</li>
	{/each}
</ul>

<style>
	ul {
		padding: 1em;
	}
</style>
