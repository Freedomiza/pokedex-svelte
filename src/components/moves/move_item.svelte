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
		<a class="link" href="#{move.move.name}" on:click|preventDefault={showMove}>
			{index}. {move.move.name.replace('-', ' ')}</a
		>
	</span>
</div>

<style lang="scss">
	/* because the directory of `theme.scss` is in `includePaths` */
	@use 'static/css/theme.scss';
	.move {
		display: flex;
		flex-direction: column;
	}
	.move-name {
		text-transform: capitalize;
	}
	.link {
		text-decoration: none;
		color: theme.$main;
	}
</style>
