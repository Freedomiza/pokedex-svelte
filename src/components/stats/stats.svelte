<script lang="ts">
	import type { Stat } from 'src/models/pokemon';
	export let stats: Stat[] = [];
</script>

<ul>
	{#each stats as stat}
		<li>
			<div class="stat-box">
				<span class="name">{stat.stat.name}:</span>

				<div class="stat-percent">
					<progress id="stats" value={stat.base_stat} max="255">
						{stat.base_stat}
					</progress>
					&nbsp;
					<span> {stat.base_stat}</span>
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
