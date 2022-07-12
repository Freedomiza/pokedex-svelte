<script lang="ts">
	import type { Pokemon } from 'src/models/pokemon';

	import Ability from '../ability/ability.svelte';
	import MoveList from '../moves/move_list.svelte';
	import Stats from '../stats/stats.svelte';
	import TypesList from '../types/types_list.svelte';

	export let pokemon: Pokemon;
</script>

<div class="pokemon-view">
	<h2 class="name">#{pokemon.order}:{pokemon.name}</h2>
	<TypesList types={pokemon.types} />
	<div class="abilities">
		<h3>Abilities:</h3>
		{#each pokemon.abilities as ability}
			<Ability ability={ability.ability} />
			&nbsp;
		{/each}
	</div>

	<img class="sprite" src={pokemon.sprites.front_default} alt={pokemon.name} />
	<Stats stats={pokemon.stats} />
	<MoveList moves={pokemon.moves} />
</div>

<style>
	.pokemon-view {
		display: flex;
		flex-direction: column;
	}
	.name {
		text-transform: capitalize;
	}
	.sprite {
		max-width: 300px;
		width: 30%;
	}
</style>
