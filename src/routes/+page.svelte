<script>
	export let data;
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<ul>
	{#each data.body as post}
		<li class="mb-4 p-4 bg-white rounded-lg shadow-md">
			<p class="text-gray-700">
				<span class="block mb-2">
					<b class="text-gray-900">Author:</b>
					{post.name}
				</span>
				<span class="block">
					<b class="text-gray-900">Post:</b>
					{post.content}
				</span>
			</p>
		</li>
	{/each}
</ul>

<style>
	ul {
		padding: 1em;
	}
</style>
