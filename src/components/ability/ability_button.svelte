<script lang="ts">
	import { getContext } from 'svelte';
	import { Button, Badge } from 'attractions';

	import type { Ability2 } from '@models/pokemon';
	import AbilityDescription from './ability_description.svelte';
	import colorHash from 'color-hash';
	export let ability: Ability2;
	export let isHidden: boolean;

	const { open } = getContext('simple-modal');
	const color = new colorHash().hex(ability.name);

	function openAbilityModal() {
		open(AbilityDescription, {
			ability: ability,
			isHidden: isHidden
		});
	}
</script>

<Badge hidden={!isHidden}>
	<Button style="background-color: {color}; position: relative;" on:click={openAbilityModal}>
		{ability.name}
	</Button>
</Badge>

<style>
</style>
