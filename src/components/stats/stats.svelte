<script lang="ts">
	import type { Stat } from '@models/pokemon';
	import { Label } from 'attractions';

	export let stats: Stat[] = [];
</script>

<ul>
	{#each stats as stat}
		<li>
			<div class="stat-box">
				<div class="name">
					<Label>{stat.stat.name}:</Label>
				</div>

				<div class="stat-percent">
					<progress id="stats" value={stat.base_stat} max="255">
						{stat.base_stat}
					</progress>
					&nbsp;
					<Label>{stat.base_stat}</Label>
				</div>
			</div>
		</li>
	{/each}
</ul>

<style>
	.name {
		text-transform: capitalize;
		flex-basis: 120px;
	}
	.stat-box {
		max-width: 300px;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
	.stat-percent {
		flex-grow: 1;
		display: flex;
		flex-direction: start;
	}
	progress {
		width: 120px;
	}
</style>
