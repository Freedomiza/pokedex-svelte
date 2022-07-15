<script lang="ts">
	import { find } from 'lodash';
	import colorHash from 'color-hash';

	import type { Ability2 } from 'src/models/pokemon';
	import type { FullAbility } from 'src/models/full_ability';
	import Tag from '../common/tag.svelte';

	export let ability: Ability2;
	export let isHidden: boolean;
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
		<h3>
			{ability.name}
		</h3>
		{#if isHidden}
			<span>(hidden ability)</span>
			<br />
		{/if}

		<br />

		<p>{currentLocaleAbility(data)?.effect}</p>

		<br />
		<Tag color={new colorHash().hex(currentLocaleAbility(data)?.short_effect ?? '#dfdfdf')}>
			{currentLocaleAbility(data)?.short_effect}
		</Tag>
	{:catch error}
		<p>{error}</p>
	{/await}
</div>

<style>
	h3 {
		text-transform: capitalize;
	}
</style>
