<script lang="ts">
	import type { Move } from 'src/models/pokemon';

	export let moves: Move[] = [];
</script>

<div class="move-list">
	<h3>Move list:</h3>
	{#each moves as move, index}
		<div class="move">
			<span class="move-name">
				{index + 1}.
				{move.move.name.replace('-', ' ')}
			</span>
		</div>
	{/each}
</div>

<style>
	.move {
		display: flex;
		flex-direction: column;
	}
	.move-name {
		text-transform: capitalize;
	}
</style>
