<script lang="ts">
	import type { FullMove } from 'src/models/full_move';
	import type { Move2 } from 'src/models/pokemon';
	import DataTable, { Body, Row, Cell } from '@smui/data-table';
	import { onMount } from 'svelte';
	import { find } from 'lodash';
	import Tag from '../common/tag.svelte';
	import colorHash from 'color-hash';

	export let move: Move2;
	let fullMove: FullMove | null;
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
		<h3 class="move-name">{currentLocaleName(data)?.name}</h3>
		{#each data.effect_entries as effect}
			<span class="move-desc">
				{effect.effect}
			</span>
		{/each}

		<br />
		<DataTable table$aria-label="" class="table" style="width: 100%;">
			<Body>
				<Row>
					<Cell><span class="cell cell-title"> Type</span></Cell>
					<Cell>
						<span class="cell cell-value">
							<Tag color={new colorHash().hex(data.type.name)}>{data.type.name}</Tag>
						</span>
					</Cell>
				</Row>
				<Row>
					<Cell><span class="cell cell-title">Damage Class</span></Cell>
					<Cell><span class="cell cell-value">{data.damage_class.name}</span></Cell>
				</Row>
				<Row>
					<Cell><span class="cell cell-title">Accuracy</span></Cell>
					<Cell><span class="cell cell-value">{data.accuracy ?? 'N/A'}</span></Cell>
				</Row>
				<Row>
					<Cell><span class="cell cell-title">Power</span></Cell>
					<Cell><span class="cell cell-value">{data.power ?? 'N/A'}</span></Cell>
				</Row>
				<Row>
					<Cell><span class="cell cell-title">PP</span></Cell>
					<Cell><span class="cell cell-value">{data.pp ?? 'N/A'}</span></Cell>
				</Row>
			</Body>
		</DataTable>
	{:catch error}
		<p>{error}</p>
	{/await}
</div>

<style>
	.move-name {
		text-transform: capitalize;
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
