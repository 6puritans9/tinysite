<script lang="ts">
	export let type: 'button' | 'submit' | 'reset' = 'button';
	export let className: string = '';
	export let disabled: boolean = false;
</script>

<button {type} class="h-10 px-6 font-semibold rounded-full bg-violet-600 text-white">
	<slot />
</button>
