<script lang="ts">
	import { find } from 'lodash';
	import colorHash from 'color-hash';

	import type { Ability2 } from '@models/pokemon';
	import type { FullAbility } from '@models/full_ability';
	import Tag from '../common/tag.svelte';
	import { H3, Label } from 'attractions';

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
		<span>loading ...</span>
	{:then data}
		<H3>
			<span class="name"> {ability.name}</span>
		</H3>
		{#if isHidden}
			<Label>(hidden ability)</Label>
			<br />
		{/if}

		<br />

		<p><Label small>{currentLocaleAbility(data)?.effect}</Label></p>

		<br />
		<Tag color={new colorHash().hex(currentLocaleAbility(data)?.short_effect ?? '#dfdfdf')}>
			{currentLocaleAbility(data)?.short_effect}
		</Tag>
	{:catch error}
		<p>{error}</p>
	{/await}
</div>

<style>
	.name {
		text-transform: capitalize;
	}
</style>
