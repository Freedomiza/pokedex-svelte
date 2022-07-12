<script lang="ts">
	import type { Type } from 'src/models/pokemon';
	import colorHash from 'color-hash';

	import Tag from '../common/tag.svelte';

	export let types: Type[] = [];
</script>

<div>
	{#each types as type}
		<Tag color={new colorHash().hex(type.type.name)}>
			<span class="name"> {type.type.name}</span>
		</Tag>
		&nbsp;
	{/each}
</div>

<style>
	.name {
		text-transform: capitalize;
	}
</style>
