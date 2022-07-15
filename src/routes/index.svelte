<script lang="ts">
	import PokemonView from '../components/pokemon_view/pokemon_view.svelte';
	import Button, { Label } from '@smui/button';

	import { DummyPokemon, type Pokemon } from '../models/pokemon';
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
	<h1>Search Pokemon</h1>

	<form name="search" on:submit|preventDefault={searchPokemon}>
		<input type="text" placeholder="Search..." bind:value={name} />

		<Button type="submit" name="Search" value="Search" variant="raised"
			><Label>Search</Label></Button
		>
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
	input[type='text'] {
		padding: 4px 12px;
	}
</style>
