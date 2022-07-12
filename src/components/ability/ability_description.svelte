<script lang="ts">
	import { find } from 'lodash';
	import colorHash from 'color-hash';

	import type { Ability2 } from 'src/models/pokemon';
	import type { FullAbility } from 'src/models/full_ability';
	import Tag from '../common/tag.svelte';

	export let ability: Ability2;
	const color = new colorHash().hex(ability.name);

	async function getAbility(abi: Ability2) {
		const res = await fetch(abi.url);
		const data = await res.json();

		if (res.ok) {
			return data as FullAbility;
		}
		throw new Error(data);
	}

	let promise = getAbility(ability);
	let locale = navigator.language.split('-')[0];

	$: currentLocaleAbility = (data: FullAbility) =>
		find(data.effect_entries, (entry) => entry?.language?.name === locale);
</script>

<div>
	{#await promise}
		<p>loading ...</p>
	{:then data}
		<h2>{ability.name}</h2>
		<p>{currentLocaleAbility(data)?.effect}</p>
		<Tag color={new colorHash().hex(currentLocaleAbility(data)?.short_effect ?? '#dfdfdf')}>
			{currentLocaleAbility(data)?.short_effect}
		</Tag>
	{/await}
</div>

<style>
	h2 {
		text-transform: capitalize;
	}
</style>
