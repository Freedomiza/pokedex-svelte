<script lang="ts">
	import PokemonView from '../components/pokemon_view/pokemon_view.svelte';

	import { DummyPokemon, type Pokemon } from '../models/pokemon';
	let name = 'ditto';
	let pokemon: Pokemon = DummyPokemon;

	async function searchPokemon() {
		console.log(`search .... ${name}`);
		pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`).then(
			(res) => res.json() as Promise<Pokemon>
		);

		console.log(pokemon);
	}
</script>

<h1>Search Pokemon</h1>

<form name="search" on:submit|preventDefault={searchPokemon}>
	<input type="text" placeholder="Search..." bind:value={name} />

	<input type="submit" name="Search" value="Search" />
</form>
{#if pokemon != null}
	<PokemonView {pokemon} />
{/if}

<style>
	form {
		display: grid;
		grid-template: 1fr / 1fr 1fr;
		grid-gap: 1em;
		width: 100%;
		max-width: 300px;
	}
	input[type='text'] {
		padding: 4px 12px;
	}
	input[type='submit'] {
		padding: 4px 12px;
	}
</style>
