<script lang="ts">
	import { getContext } from 'svelte';

	import type { Ability2 } from 'src/models/pokemon';
	import AbilityDescription from './ability_description.svelte';
	import colorHash from 'color-hash';
	export let ability: Ability2;

	const { open } = getContext('simple-modal');
	const color = new colorHash().hex(ability.name);

	function openAbilityModal() {
		open(AbilityDescription, {
			ability: ability
		});
	}
</script>

<button
	class="ability"
	style="background-color: {color};"
	on:click|preventDefault={openAbilityModal}
>
	<span>{ability.name} </span>
</button>

<style>
	.ability {
		padding: 5px;
		border-radius: 4px;
		display: inline-block;
	}
</style>
