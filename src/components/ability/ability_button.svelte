<script lang="ts">
	import { getContext } from 'svelte';
	import Button, { Label } from '@smui/button';
	import Badge from '@smui-extra/badge';

	import type { Ability2 } from 'src/models/pokemon';
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

<Button
	class="ability"
	style="background-color: {color}; position: relative;"
	on:click={openAbilityModal}
>
	<Label
		>{ability.name}
		{#if isHidden}
			<Badge class="hidden" position="outset">hidden</Badge>
		{/if}
	</Label>
</Button>

<style>
</style>
