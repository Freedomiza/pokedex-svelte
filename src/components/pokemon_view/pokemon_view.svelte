<script lang="ts">
	import Card, { Content } from '@smui/card';
	import Paper, { Title, Subtitle } from '@smui/paper';

	import type { Pokemon } from 'src/models/pokemon';

	import Ability from '../ability/ability.svelte';
	import MoveList from '../moves/move_list.svelte';
	import Stats from '../stats/stats.svelte';
	import TypesList from '../types/types_list.svelte';

	export let pokemon: Pokemon;
</script>

<Paper>
	<Title>
		<h2 class="name">#{pokemon.order}:{pokemon.name}</h2>
	</Title>
	<Subtitle><TypesList types={pokemon.types} /></Subtitle>
	<Content>
		<div class="pokemon-view">
			<div class="abilities">
				<h4>Abilities:</h4>
				{#each pokemon.abilities as ability}
					<Ability ability={ability.ability} isHidden={ability.is_hidden} />
					&nbsp;
				{/each}
			</div>

			<img class="sprite" src={pokemon.sprites.front_default} alt={pokemon.name} />
			<br />
			<Stats stats={pokemon.stats} />
			<br />
			<MoveList moves={pokemon.moves} />
			<br />
		</div>
	</Content>
</Paper>

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
