<script lang="ts">
	export let color: string = '#ffffff';
</script>

<span class="tag" style="background-color: {color}">
	<slot />
</span>

<style>
	.tag {
		padding: 5px;
		border-radius: 4px;
		display: inline-block;
	}
</style>
