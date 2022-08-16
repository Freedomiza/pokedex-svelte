<script lang="ts">
	import type { FullMove } from '@models/full_move';
	import type { Move2 } from '@models/pokemon';
	import { H3, Label } from 'attractions';

	import { onMount } from 'svelte';
	import { find } from 'lodash';
	import Tag from '@components/common/tag.svelte';
	import colorHash from 'color-hash';

	export let move: Move2;
	onMount(async () => {
		console.log(move);
	});

	async function getFullMove(moveItem: Move2) {
		const res = await fetch(moveItem.url);
		const data = await res.json();

		if (res.ok) {
			console.log(data);
			return data as FullMove;
		}
		throw new Error(data);
	}
	let locale = navigator.language.split('-')[0];

	let promise = getFullMove(move);

	$: currentLocaleName = (data: FullMove) =>
		find(data.names, (entry) => entry?.language?.name === locale);
</script>

<div>
	{#await promise}
		<p>loading ...</p>
	{:then data}
		<H3 class="move-name">{currentLocaleName(data)?.name}</H3>
		{#each data.effect_entries as effect}
			<span class="move-desc">
				<Label small>{effect.effect}</Label>
			</span>
		{/each}

		<br />

		<div class="table" style="width: 100%;">
			<div class="row">
				<div class="cell"><span class="cell cell-title"><Label>Type</Label> </span></div>
				<div class="cell">
					<span class="cell cell-value">
						<Tag color={new colorHash().hex(data.type.name)}>{data.type.name}</Tag>
					</span>
				</div>
			</div>
			<div class="row">
				<div class="cell"><span class="cell cell-title"><Label>Damage Class</Label></span></div>
				<div class="cell"><span class="cell cell-value"> {data.damage_class.name}</span></div>
			</div>
			<div class="row">
				<div class="cell"><span class="cell cell-title"><Label>Accuracy</Label></span></div>
				<div class="cell"><span class="cell cell-value">{data.accuracy ?? 'N/A'}</span></div>
			</div>
			<div class="row">
				<div class="cell"><span class="cell cell-title"><Label>Power</Label></span></div>
				<div class="cell"><span class="cell cell-value">{data.power ?? 'N/A'}</span></div>
			</div>
			<div class="row">
				<div class="cell"><span class="cell cell-title"><Label>PP</Label></span></div>
				<div class="cell"><span class="cell cell-value">{data.pp ?? 'N/A'}</span></div>
			</div>
		</div>
	{:catch error}
		<p>{error}</p>
	{/await}
</div>

<style>
	.table {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-gap: 1em;
	}
	.row {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	.move-desc {
		display: block;
		font-size: 0.9em;
		padding-top: 10px;
		padding-bottom: 10px;
	}

	.cell-value {
		text-transform: capitalize;
	}
	.cell-title {
		font-weight: bold;
	}
</style>
