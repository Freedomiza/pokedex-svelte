<script lang="ts">
	import { Button, Headline, TextField } from 'attractions';
	import PokemonView from '@components/pokemon_view/pokemon_view.svelte';
	import { DummyPokemon, type Pokemon } from '@models/pokemon';

	let name = 'ditto';
	let pokemon: Pokemon | null = DummyPokemon;

	async function searchPokemon() {
		console.log(`search .... ${name}`);
		pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`).then(
			(res) => res.json() as Promise<Pokemon>,
			(err) => {
				console.log(err);
				return null;
			}
		);

		console.log(pokemon);
	}
</script>

<div class="container">
	<Headline>Search Pokemon</Headline>

	<form name="search" on:submit|preventDefault={searchPokemon}>
		<TextField placeholder="Search..." bind:value={name} />

		<Button small type="submit" value="Search" filled rectangle>Search</Button>
	</form>
	{#if pokemon != null}
		<PokemonView {pokemon} />
	{:else}
		<p>No pokemon found</p>
	{/if}
</div>

<style>
	form {
		display: grid;
		grid-template: 1fr / 1fr 1fr;
		grid-gap: 1em;
		width: 100%;
		max-width: 300px;
		padding-bottom: 20px;
	}
</style>
