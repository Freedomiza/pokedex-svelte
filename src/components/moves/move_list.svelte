<script lang="ts">
	import type { Move } from 'src/models/pokemon';
	import MoveItem from './move_item.svelte';
	import Modal from 'svelte-simple-modal';

	export let moves: Move[] = [];
</script>

<div class="move-list">
	<h4>Move list:</h4>
	<Modal>
		{#each moves as move, index}
			<MoveItem {move} index={index + 1} />
		{/each}
	</Modal>
</div>

<style>
	.move-list {
		display: flex;
		flex-direction: column;
	}
</style>
