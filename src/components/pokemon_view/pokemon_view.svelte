<script lang="ts">
	import { Card, H2, H3 } from 'attractions';
	import type { Pokemon } from '@models/pokemon';
	import Ability from '@components/ability/ability.svelte';
	import MoveList from '@components/moves/move_list.svelte';
	import Stats from '@components/stats/stats.svelte';
	import TypesList from '@components/types/types_list.svelte';

	export let pokemon: Pokemon;
</script>

<Card outline>
	<div class="card-body">
		<div class="title">
			<H2
				><span class="name">
					#{pokemon.order}:{pokemon.name}
				</span></H2
			>
		</div>
		<div class="sub-title"><TypesList types={pokemon.types} /></div>
		<br />
		<div class="pokemon-view">
			<H3>Abilities:</H3>

			<div class="abilities">
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
	</div>
</Card>

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
	.abilities {
		display: flex;
		flex-direction: row;
		align-items: center;
	}
</style>
