<script lang="ts">
	import { getContext, onMount } from 'svelte';

	import type { Move } from 'src/models/pokemon';
	import MoveDescription from './move_description.svelte';
	const { open } = getContext('simple-modal');

	export let move: Move;
	export let index: number;

	function showMove() {
		open(MoveDescription, {
			move: move.move
		});
	}
	onMount(() => {
		console.log(move);
	});
</script>

<div class="move">
	<span class="move-name">
		{index}.
		<a href="#{move.move.name}" on:click|preventDefault={showMove}
			>{move.move.name.replace('-', ' ')}</a
		>
	</span>
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
